# Planning Guide

A modern, conversion-focused website for StudentenAtHome, a tech support service in Dresden connecting customers with skilled student technicians for home and business tech solutions.

**Experience Qualities**:
1. **Professional yet Approachable** - The site balances technical credibility with warmth and accessibility, reflecting the student-led service model
2. **Effortlessly Clear** - Every piece of information guides the visitor toward understanding the service and taking action without cognitive load
3. **Trustworthy and Reliable** - Visual design and content presentation instill confidence in the service quality and team expertise

**Complexity Level**: Light Application (multiple features with basic state)
This is a marketing website with multiple interconnected pages, navigation state management, form handling, and newsletter subscription functionality, requiring route simulation and component state management.

## Essential Features

**Multi-Page Navigation**
- Functionality: Route between Home, Lösungen (Services), Über uns (About), and Kontakt (Contact) pages
- Purpose: Organize content logically and allow visitors to explore specific information areas
- Trigger: User clicks navigation links in header or throughout content
- Progression: Click navigation item → smooth transition → page content loads → URL updates in component state → appropriate page component renders
- Success criteria: All navigation links work, current page is visually indicated, navigation is consistent across all pages

**Hero Section with Dual CTAs**
- Functionality: Display compelling headline with two distinct call-to-action buttons
- Purpose: Immediately communicate value proposition and provide clear next steps for different user intents
- Trigger: User lands on homepage
- Progression: Page loads → hero displays with headline → primary CTA (Lösungen) and secondary CTA (Jetzt buchen) are visible → user clicks preferred action → navigates to appropriate page
- Success criteria: CTAs are visually distinct, hover states are clear, navigation occurs correctly

**Service Showcase with Pricing**
- Functionality: Display 8 service offerings and 2 pricing tiers with detailed features
- Purpose: Clearly communicate what services are offered and at what cost structure
- Trigger: User navigates to Lösungen page
- Progression: Navigate to Services → service grid displays → scroll to view all offerings → pricing cards show plan comparison → CTA buttons enable booking action
- Success criteria: Services are scannable, pricing is clear and differentiated, features are easy to compare

**Contact Form with Validation**
- Functionality: Collect visitor information (first name, last name, email, phone, message) with field validation
- Purpose: Enable visitors to reach out for support, providing a low-friction conversion path
- Trigger: User navigates to Kontakt page and fills form
- Progression: Visit contact page → view contact methods → fill form fields → validation checks each field → submit button becomes active → form submits → success confirmation appears
- Success criteria: All fields validate properly, error states are helpful, success state confirms submission

**Newsletter Subscription**
- Functionality: Email capture for newsletter signup with call-to-action for 5 free tech tips
- Purpose: Build email list and provide ongoing value to visitors
- Trigger: User sees newsletter block on homepage
- Progression: Scroll to newsletter section → read value proposition → enter email → click subscribe → confirmation message appears
- Success criteria: Email validation works, subscription confirms visually, input clears after success

## Edge Case Handling

- **Empty Form Submission** - Required field validation prevents submission and highlights missing fields with clear error messages
- **Invalid Email Format** - Real-time email validation provides immediate feedback when format is incorrect
- **Mobile Navigation** - Hamburger menu appears on small screens with smooth slide-in drawer for navigation items
- **Long Form Messages** - Textarea expands appropriately and handles multi-line content without layout breaks
- **External Link Handling** - All navigation preserves link structure while social links open appropriately
- **Missing Content Sections** - Graceful fallbacks if optional content is undefined

## Design Direction

The design should evoke a sense of modern professionalism with a human touch—clean, spacious, and approachable rather than corporate or sterile. The aesthetic should feel like a premium service delivered by friendly experts: confident without being intimidating, organized without feeling rigid, contemporary without being trendy.

## Color Selection

A professional palette with warm accents that balance technical credibility with approachable, human-centered service.

- **Primary Color**: Deep Ocean Blue (oklch(0.35 0.08 250)) - Represents trust, reliability, and technical expertise; anchors the brand identity
- **Secondary Colors**: 
  - Soft Slate (oklch(0.92 0.01 250)) - Subtle backgrounds for cards and sections, creates visual breathing room
  - Cool Gray (oklch(0.65 0.02 250)) - Muted text and borders for information hierarchy
- **Accent Color**: Energetic Coral (oklch(0.68 0.18 25)) - Draws attention to CTAs and important interactive elements, adds warmth and approachability
- **Foreground/Background Pairings**: 
  - Background White (oklch(0.99 0 0)): Dark Blue text (oklch(0.25 0.05 250)) - Ratio 12.1:1 ✓
  - Primary Blue (oklch(0.35 0.08 250)): White text (oklch(0.99 0 0)) - Ratio 8.9:1 ✓
  - Accent Coral (oklch(0.68 0.18 25)): White text (oklch(0.99 0 0)) - Ratio 4.6:1 ✓
  - Soft Slate (oklch(0.92 0.01 250)): Dark Blue text (oklch(0.25 0.05 250)) - Ratio 10.8:1 ✓

## Font Selection

Typography should feel contemporary and highly readable with a touch of personality—professional enough for business clients while remaining approachable for private customers.

- **Primary Font**: Space Grotesk - A modern geometric sans-serif with technical precision and friendly personality, perfect for headings and emphasis
- **Body Font**: Inter - Clean, highly legible, optimized for screen reading with excellent clarity at all sizes

- **Typographic Hierarchy**:
  - H1 (Hero Headlines): Space Grotesk Bold / 56px / -0.02em letter spacing / leading-tight
  - H2 (Section Titles): Space Grotesk Bold / 36px / -0.01em letter spacing / leading-snug
  - H3 (Subsection Titles): Space Grotesk SemiBold / 24px / normal letter spacing / leading-normal
  - H4 (Card Titles): Space Grotesk Medium / 20px / normal letter spacing / leading-normal
  - Body Large: Inter Regular / 18px / normal letter spacing / leading-relaxed (1.7)
  - Body: Inter Regular / 16px / normal letter spacing / leading-relaxed (1.7)
  - Small: Inter Regular / 14px / normal letter spacing / leading-normal

## Animations

Animations should feel purposeful and refined—subtle enough to not distract but present enough to enhance the premium feel and guide user attention. Motion creates a sense of responsiveness and polish without delaying user actions.

- **Page Transitions**: Gentle fade-in on page load (200ms) to prevent jarring content swaps
- **Scroll Reveals**: Sections fade in and slide up slightly (y: 20px) as they enter viewport using Intersection Observer
- **Hover States**: Smooth scale transforms (1.02) and shadow depth changes on cards and buttons (200ms ease)
- **CTA Buttons**: Subtle background color shift and light bounce effect on hover to encourage clicks
- **Form Inputs**: Focus state with smooth border color transition and subtle scale on label
- **Mobile Menu**: Slide-in drawer animation (300ms) with backdrop fade for navigation

## Component Selection

- **Components**: 
  - Button (primary, secondary, ghost variants) for all CTAs with custom hover states
  - Card for value props, services, pricing tiers, and testimonial with subtle shadows
  - Input and Textarea for contact form and newsletter with floating labels
  - Navigation Menu for desktop nav with active state indicators
  - Sheet for mobile navigation drawer with overlay
  - Badge for plan features with check icons
  - Separator for visual content breaks between sections
  
- **Customizations**: 
  - Custom gradient backgrounds for hero and highlight sections using layered mesh gradients
  - Pricing card with highlighted "Premium" variant using border accent
  - Testimonial card with quotation mark visual element
  - Newsletter block with integrated form and background pattern
  
- **States**: 
  - Buttons: Default with solid backgrounds, hover with scale and shadow, active with slight press, disabled with reduced opacity
  - Inputs: Default with border, focus with accent border and ring, error with destructive color, success with check icon
  - Cards: Default with light shadow, hover with elevated shadow and subtle scale
  - Navigation: Active page with accent underline, hover with text color change
  
- **Icon Selection**: 
  - CheckCircle for pricing feature lists
  - Phone, Envelope, MapPin for contact details
  - ArrowRight for CTA button directional cues
  - Menu (Hamburger) for mobile navigation trigger
  - Facebook, Instagram, X, YouTube for social links
  - Sparkles for highlighting premium features
  
- **Spacing**: 
  - Section padding: py-20 (desktop), py-12 (mobile)
  - Container max-width: max-w-7xl with px-6 horizontal padding
  - Card padding: p-8 (desktop), p-6 (mobile)
  - Element gaps: gap-16 for major sections, gap-8 for related groups, gap-4 for tight groupings
  
- **Mobile**: 
  - Navigation collapses to hamburger menu with slide-in drawer
  - Hero headline reduces to 36px on mobile
  - Two-column service grid becomes single column
  - Pricing cards stack vertically
  - Form inputs use full width with increased touch targets (min 44px height)
  - Footer links collapse into vertical stacks with clear sections
