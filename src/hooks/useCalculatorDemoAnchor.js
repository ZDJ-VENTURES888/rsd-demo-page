/**
 * Calculator → Demo Page Anchor Mapping
 *
 * Maps calculator selection values to demo page anchor IDs.
 * Used by CalculatorDemoLink component to generate correct deep-links.
 *
 * To use in the calculator repo's recommendation page:
 * 1. Copy this file to: src/hooks/useCalculatorDemoAnchor.js
 * 2. Copy CalculatorDemoLink.jsx to: src/components/CalculatorDemoLink.jsx
 * 3. Import: import { CalculatorDemoLink } from '../components/CalculatorDemoLink'
 * 4. Use: <CalculatorDemoLink selection={recommendedSelection} />
 * 5. The link will route to /demo?focus=<anchor> on demo.rsddirect.com
 */

const SELECTION_TO_ANCHOR_MAP = {
  'lost-revenue': 'loss-revenue-leverage',
  'save-time-bookings': 'tour-to-booking',
  'reduce-hassle': 'always-on-operations',
  'authority-addon': 'always-on-authority',
  'social-addon': 'social-avatar',
  'reputation-addon': 'reputation-flywheel',
  'product-photo-addon': 'product-photo',
  'seasonal-addon': 'seasonal-shoots',
  'digital-twin-addon': 'digital-twin',
  'full-bundle': 'conversion-os',
};

const ANCHOR_TO_SERVICE_NAME_MAP = {
  'loss-revenue-leverage': 'Loss Revenue Prevention',
  'tour-to-booking': 'Tour to Booking',
  'always-on-operations': 'Always-On Operations',
  'always-on-authority': 'Always-On Authority',
  'social-avatar': 'Social Avatar Presence',
  'reputation-flywheel': 'Reputation Flywheel',
  'product-photo': 'Product Photo Shoot',
  'seasonal-shoots': 'Seasonal Shoots',
  'digital-twin': 'Digital Twin Clone',
  'conversion-os': 'Conversion OS',
};

/**
 * Get the demo page anchor for a calculator selection
 * @param {string} selection - The calculator selection value
 * @returns {string|null} - The anchor ID, or null if not found
 */
export const getAnchorForSelection = (selection) => {
  return SELECTION_TO_ANCHOR_MAP[selection] || null;
};

/**
 * Get the service name for an anchor
 * @param {string} anchor - The anchor ID
 * @returns {string|null} - The service name, or null if not found
 */
export const getServiceNameForAnchor = (anchor) => {
  return ANCHOR_TO_SERVICE_NAME_MAP[anchor] || null;
};

/**
 * Build the demo page URL with focus parameter
 * @param {string} selection - The calculator selection value
 * @param {string} baseUrl - Optional base URL (default: /demo)
 * @returns {string|null} - The full URL with ?focus= parameter, or null if selection is invalid
 */
export const getDemoPageUrl = (selection, baseUrl = '/demo') => {
  const anchor = getAnchorForSelection(selection);
  if (!anchor) return null;
  return `${baseUrl}?focus=${anchor}`;
};

/**
 * Get all available selections (for debugging/testing)
 * @returns {string[]} - Array of all valid selection values
 */
export const getAvailableSelections = () => {
  return Object.keys(SELECTION_TO_ANCHOR_MAP);
};

/**
 * Check if a selection is valid
 * @param {string} selection - The selection value to check
 * @returns {boolean}
 */
export const isValidSelection = (selection) => {
  return selection in SELECTION_TO_ANCHOR_MAP;
};

export default {
  getAnchorForSelection,
  getServiceNameForAnchor,
  getDemoPageUrl,
  getAvailableSelections,
  isValidSelection,
};
