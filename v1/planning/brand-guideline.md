# Brand Guideline - Ranyn Labs Design System

## 1. Context and Goals
To establish a bold, personality-driven identity for Ranyn Labs. The visual identity must project cutting-edge intelligence (AI/ML) combined with strict ethical alignment, using developer-centric details (monospaced type, terminal styling) and vibrant accent palettes.

## 2. Design Tokens and Foundations

### Color Palette
- **Primary (Vibrant Pink/Magenta)**: `#db2777`
- **Secondary (Technical Blue)**: `#2563eb`
- **Success (Green)**: `#16a34a`
- **Warning (Orange)**: `#d97706`
- **Danger (Red)**: `#dc2626`
- **Dark Neutral (Slate Black)**: `#0f172a` (Primary Background)
- **Light Neutral (Ice Slate)**: `#f8fafc` (Secondary Background)
- **Surface**: `#1e293b`
- **Text Primary**: `#f8fafc`
- **Text Secondary**: `#94a3b8`

### Typography Scale
- **Font Family**: IBM Plex Mono (Primary, Display, Monospace)
- **Scale**:
  - `h1`: 40px (Weight 700)
  - `h2`: 32px (Weight 600)
  - `h3`: 24px (Weight 500)
  - `body-large`: 18px (Weight 400)
  - `body-normal`: 16px (Weight 400)
  - `small/caption`: 14px (Weight 300)

### Spacing Scale
- Base grid unit: **4px**
- Common increments: `4px` | `8px` | `12px` | `16px` | `24px` | `32px` | `48px` | `64px`

---

## 3. Component-Level Rules

### Buttons
- **Anatomy**: Left/right border with custom color accent, text label, and hover micro-transform.
- **States**:
  - `Default`: Pink primary border, white text, dark slate background.
  - `Hover`: Background becomes pink primary, text becomes dark neutral, subtle translateY(-2px).
  - `Focus`: Bold cyan focus outline (minimum 2px).
  - `Disabled`: Opacity 50%, grayscale, pointer-events none.

### Terminal Console
- **Anatomy**: Dark header band with red/yellow/green control dots, content container running simulated prompt outputs.
- **Responsive Behavior**: Stack columns vertically on viewports < 768px, horizontal columns for larger screens.

---

## 4. Accessibility Requirements
- **Contrast**: Text elements must meet WCAG 2.2 AA (minimum contrast ratio of 4.5:1 for normal text, 3:1 for large text).
- **Keyboard Navigation**: All interactive elements must support `Tab` navigation. Use explicit, high-contrast `:focus-visible` styles.

---

## 5. Content and Tone Standards
- **Tone**: Terse, professional, intelligent, ethical.
- **Do**:
  - "Intelligent Systems. Ethical Engineering. Global Impact."
- **Don't**:
  - "We are a generic software company building basic apps."

---

## 6. Anti-Patterns
- Avoid using standard sans-serif fonts (like Arial or Inter) for headings; keep it Monospace.
- Avoid muted, low-contrast text on dark backgrounds.
- Do not mix more than two accent colors on the same section.

---

## 7. QA Checklist
- [ ] Contrast ratios checked for background/foreground elements.
- [ ] Monospace fonts successfully loaded and rendered.
- [ ] Keyboard focus outlines visible when navigating with the `Tab` key.
