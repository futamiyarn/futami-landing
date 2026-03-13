# Product Guidelines

## Visual Aesthetic
- **Modern Minimalist**: Focus on a clean, dark-themed interface with ample whitespace and a modular card-based layout.
- **Consistency**: Maintain consistent spacing, typography (Poppins/Onest), and color palettes across all sections.
- **Content Hierarchy**: Use clear headings and visual weight to prioritize the most important content (Latest Videos, Support Links).

## Interaction Principles
- **Touch-First Navigation**: Ensure all interactive elements (buttons, cards, navigation links) have adequate touch targets for mobile users.
- **Responsive Feedback**: Provide immediate visual feedback (e.g., hover states, active states) for all user actions.
- **Smooth Transitions**: Use subtle animations to enhance the transition between themes and sections without compromising performance.

## Content & Tone
- **Voice**: Friendly and informal, fostering a sense of community and connection with the Futami brand.
- **Copy**: Labels should be concise but descriptive (e.g., "Watch Latest" instead of "Click Here").
- **Language**: Primarily Indonesian/English as per current project context, ensuring clarity for a global audience.

## Accessibility (A11y)
- **Contrast**: Maintain high contrast ratios for all text against backgrounds, especially in dark mode.
- **Semantics**: Use proper HTML5 semantic elements (`<nav>`, `<section>`, `<article>`) to ensure compatibility with screen readers.
- **Navigation**: Support keyboard navigation for all interactive elements, ensuring a logical tab order.
- **Descriptive Labels**: Provide `aria-label` attributes where visual labels are insufficient, particularly for icon-only buttons.

## Technical Performance
- **Fast Loading**: Prioritize image optimization and minimal JS delivery for a fast initial paint.
- **Caching**: Leverage Cloudflare KV caching for external API data to minimize network latency.
