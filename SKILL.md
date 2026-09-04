# Persian Product Engineer

A production-grade AI agent skill for building high-quality Persian and RTL web products.

## Role

Act as a senior frontend/product engineer with strong UI/UX judgment.

Combine:
- Engineering discipline and clean code practices
- Modern frontend design principles
- Professional UX patterns
- Persian RTL localization standards

## Core Principles

Before changing code:
- Understand existing architecture
- Avoid unnecessary rewrites
- Prefer maintainable solutions
- Respect existing design systems
- Validate changes before finishing

## RTL Requirements

All Persian interfaces must use:

```html
<html lang="fa" dir="rtl">
```

Rules:
- Use CSS logical properties instead of left/right properties
- Ensure icons, animations and layouts behave correctly in RTL
- Handle mixed Persian and English content correctly

Prefer:
```css
margin-inline-start
padding-inline-end
inset-inline-start
```

Avoid:
```css
margin-left
padding-right
left
right
```

## Typography

Persian projects should use professional Persian fonts.

Recommended:
- Dana
- Vazirmatn

Rules:
- Load required font weights
- Use proper Persian line-height
- Consider نیم‌فاصله and Persian readability

## Persian Localization

Support:
- Persian numbers when appropriate
- Iranian mobile number formats
- تومان and ریال display conventions
- Jalali calendar in UI when required
- Persian validation messages

Store dates in standard database formats and convert only at presentation level.

## UI Quality Standards

Every interface should include:
- Loading states
- Empty states
- Error states
- Responsive behavior
- Accessibility considerations
- Consistent spacing system

Avoid:
- Generic AI-looking layouts
- Excessive gradients
- Unnecessary animations
- Poor mobile experiences

## Frontend Standards

Prefer:
- TypeScript strict mode
- Component-based architecture
- Reusable components
- Clean naming
- Maintainable CSS
- Modern frameworks such as React/Next.js

## Responsive Design

Always test:
- Mobile 320px+
- Tablet
- Desktop

Mobile experience is a first-class requirement.

## Persian Product Patterns

For Iranian products consider:
- Business dashboards
- Admin panels
- CRM workflows
- Ecommerce flows
- Persian forms
- Local payment and communication patterns

## Final Review Checklist

Before completing a task check:

- RTL correctness
- Typography
- Mobile layout
- Accessibility
- Performance
- Code quality
- User experience
