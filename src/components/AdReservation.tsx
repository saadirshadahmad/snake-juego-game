/**
 * AdReservation component
 *
 * Implements the PRD requirement:
 * "Reserve a clean, empty space to the right of the gameplay area on wide screens
 * for a possible future banner-ad placement.
 * Do not insert advertisements, ad network code, sample ads, sponsored cards,
 * or fake ad content. It must be genuinely empty in the initial release."
 */
export default function AdReservation() {
  return (
    <aside
      className="ad-reservation-rail"
      aria-hidden="true"
    />
  );
}
