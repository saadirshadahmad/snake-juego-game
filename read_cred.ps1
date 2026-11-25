$code = @"
using System;
using System.Runtime.InteropServices;
using System.Text;

public class CredentialReader {
    [DllImport("advapi32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
    public static extern bool CredRead(string target, int type, int reservedFlag, out IntPtr credentialPtr);

    [DllImport("advapi32.dll", SetLastError = true)]
    public static extern void CredFree(IntPtr credentialPtr);

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CREDENTIAL {
        public int Flags;
        public int Type;
        public string TargetName;
        public string Comment;
        public long LastWritten;
        public int CredentialBlobSize;
        public IntPtr CredentialBlob;
        public int Persist;
        public int AttributeCount;
        public IntPtr Attributes;
        public string TargetAlias;
        public string UserName;
    }

    public static string GetPassword(string target) {
        IntPtr credPtr;
        if (CredRead(target, 1, 0, out credPtr)) {
            CREDENTIAL cred = (CREDENTIAL)Marshal.PtrToStructure(credPtr, typeof(CREDENTIAL));
            byte[] blob = new byte[cred.CredentialBlobSize];
            Marshal.Copy(cred.CredentialBlob, blob, 0, cred.CredentialBlobSize);
            CredFree(credPtr);
            // Credentials can be UTF-8 or Unicode
            string utf8 = Encoding.UTF8.GetString(blob);
            if (!string.IsNullOrEmpty(utf8) && utf8.IndexOf('\0') == -1) {
                return utf8;
            }
            return Encoding.Unicode.GetString(blob);
        }
        return null;
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp
$p = [CredentialReader]::GetPassword('LegacyGeneric:target=GitHub - https://api.github.com/saadirshadahmad')
if ($p) {
    Write-Output "TOKEN_LEN:$($p.Length)"
    [IO.File]::WriteAllText("$PSScriptRoot\.gh_token_tmp", $p)
} else {
    Write-Output "TOKEN_EMPTY"
}
