/**
 * CalculatorDemoLink Component
 *
 * Renders a styled link to the demo page with deep-link focusing.
 * Used on the calculator's recommendation page.
 *
 * INSTALLATION (for calculator repo):
 * ─────────────────────────────────────
 * 1. Copy this file to: src/components/CalculatorDemoLink.jsx
 * 2. Copy useCalculatorDemoAnchor.js to: src/hooks/useCalculatorDemoAnchor.js
 * 3. In your recommendation page component, import:
 *    import { CalculatorDemoLink } from '../components/CalculatorDemoLink'
 * 4. Use in JSX:
 *    <CalculatorDemoLink selection="lost-revenue" />
 *    or
 *    <CalculatorDemoLink selection={recommendedPackage} />
 * 5. The link will route to: /demo?focus=<anchor> on demo.rsddirect.com
 *
 * PROPS:
 * ──────
 * - selection (string, required): The calculator selection value
 *   Valid values: 'lost-revenue', 'save-time-bookings', 'reduce-hassle',
 *                 'authority-addon', 'social-addon', 'reputation-addon',
 *                 'product-photo-addon', 'seasonal-addon', 'digital-twin-addon',
 *                 'full-bundle'
 * - label (string, optional): Custom button text (default: "See demo")
 * - className (string, optional): Additional CSS classes
 * - target (string, optional): Link target (default: "_self")
 * - demoBaseUrl (string, optional): Base URL for demo (default: "/demo")
 *
 * STYLING:
 * ────────
 * Includes inline styles matching RSD brand:
 * - Background: #C9A961 (gold)
 * - Text: #0B2545 (navy)
 * - Border radius: 24px
 * - Font: Outfit, 14px, 600 weight
 * - Hover: Brighter gold with lift effect
 */

import { getAnchorForSelection, getServiceNameForAnchor } from '../hooks/useCalculatorDemoAnchor';

export const CalculatorDemoLink = ({
  selection,
  label = 'See demo',
  className = '',
  target = '_self',
  demoBaseUrl = '/demo',
}) => {
  // Get anchor from selection
  const anchor = getAnchorForSelection(selection);
  const serviceName = getServiceNameForAnchor(anchor);

  // If selection is invalid, return nothing
  if (!anchor) {
    console.warn(
      `[CalculatorDemoLink] Invalid selection: "${selection}". Valid values: lost-revenue, save-time-bookings, reduce-hassle, authority-addon, social-addon, reputation-addon, product-photo-addon, seasonal-addon, digital-twin-addon, full-bundle`
    );
    return null;
  }

  // Build the demo URL with focus parameter
  const demoUrl = `${demoBaseUrl}?focus=${anchor}`;

  return (
    <a
      href={demoUrl}
      target={target}
      className={`calculator-demo-link ${className}`.trim()}
      style={{
        display: 'inline-block',
        background: '#C9A961',
        color: '#0B2545',
        textDecoration: 'none',
        padding: '12px 24px',
        borderRadius: '24px',
        fontSize: '14px',
        fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.background = '#D4B896';
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 12px rgba(201, 169, 97, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = '#C9A961';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
      aria-label={`See demo of ${serviceName}`}
    >
      {label}
    </a>
  );
};

/**
 * USAGE EXAMPLES:
 * ───────────────
 *
 * Basic usage:
 * <CalculatorDemoLink selection="lost-revenue" />
 *
 * Custom label:
 * <CalculatorDemoLink selection="save-time-bookings" label="Watch demo" />
 *
 * With dynamic selection:
 * <CalculatorDemoLink selection={userSelection} />
 *
 * Multiple links (e.g., in a recommendation section):
 * <div>
 *   <p>See how this works in action:</p>
 *   <CalculatorDemoLink selection={recommendedPackage} label="View demo" />
 * </div>
 *
 * DEEP-LINK ROUTING:
 * ──────────────────
 * When a user clicks the link, they're taken to:
 * demo.rsddirect.com/demo?focus=loss-revenue-leverage
 *
 * The demo page's useFocusScroll hook automatically:
 * 1. Reads the ?focus= parameter from the URL
 * 2. Scrolls to the matching anchor
 * 3. Highlights the section with a gold border fade (2.5s)
 * 4. Respects prefers-reduced-motion for accessibility
 *
 * ACCESSIBILITY:
 * ──────────────
 * - aria-label includes the service name
 * - Keyboard accessible (tab to focus, enter to activate)
 * - Focus outline visible on keyboard nav
 * - No animations if user prefers reduced motion
 */

export default CalculatorDemoLink;
