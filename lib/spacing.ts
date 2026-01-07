/**
 * Spacing Constants - Professional 8px Grid System
 * Use these constants for consistent spacing throughout the app
 */

export const spacing = {
  // Section Spacing - SUPER GENEROUS
  section: 'py-40',           // 160px - Standard section padding (DOUBLED)
  sectionCompact: 'py-30',    // 120px - Compact section padding
  sectionHero: 'py-48',       // 192px - Hero section padding

  // Container Spacing - INCREASED
  container: 'px-30',         // 120px - Desktop container padding (DOUBLED)
  containerMobile: 'px-15',   // 60px - Mobile container padding

  // Component Padding - MORE GENEROUS
  cardPadding: 'p-12',        // 48px - Standard card internal padding (was 32)
  cardPaddingLarge: 'p-16',   // 64px - Large card internal padding (was 48)
  cardPaddingSmall: 'p-8',    // 32px - Small card internal padding (was 24)

  // Form Spacing - INCREASED
  formField: 'space-y-12',    // 48px - Between form fields (was 32)
  formFieldCompact: 'space-y-8', // 32px - Compact form spacing (was 24)
  labelGap: 'mb-4',           // 16px - Label to input gap (was 12)

  // Grid Spacing - MUCH MORE SPACIOUS
  gridDense: 'gap-10',        // 40px - Dense grid layout (was 24)
  gridComfortable: 'gap-12',  // 48px - Comfortable grid (was 32)
  gridSpacious: 'gap-16',     // 64px - Spacious grid (was 48)

  // Button Groups - MORE SPACE
  buttonGroup: 'gap-12',      // 48px - Between buttons (was 32)
  buttonGroupCompact: 'gap-8', // 32px - Compact button group (was 24)

  // Typography Spacing - INCREASED
  headingMassive: 'mb-24',    // 96px - For text-9xl headings (was 64)
  headingLarge: 'mb-20',      // 80px - For text-8xl headings (was 48)
  headingMedium: 'mb-16',     // 64px - For text-6xl headings (was 32)
  headingSmall: 'mb-12',      // 48px - For text-4xl headings (was 24)
  paragraph: 'mb-10',         // 40px - Paragraph spacing (was 24)

  // List Spacing - MORE GENEROUS
  listGap: 'space-y-8',       // 32px - Between list items (was 24)
  listGapCompact: 'space-y-6', // 24px - Compact lists (was 16)

  // Navigation - MORE SPACE
  navGap: 'gap-16',           // 64px - Between nav items (was 48)
  navGapCompact: 'gap-12',    // 48px - Compact navigation (was 32)

  // Footer Spacing - INCREASED
  footerPadding: 'px-30 py-40', // 120x160px - Footer padding (was 64x80)
  footerColumns: 'gap-20',    // 80px - Between footer columns (was 64)
  footerLinks: 'gap-6',       // 24px - Between footer links (was 16)
} as const;

/**
 * Breakpoint utilities for responsive spacing
 */
export const breakpoints = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
} as const;

/**
 * Touch target minimum size (iOS standard)
 */
export const touchTarget = {
  minimum: 44, // pixels
  comfortable: 48, // pixels
} as const;
