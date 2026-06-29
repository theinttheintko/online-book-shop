# Skill: Bookstore UI Standards

This skill enforces consistent design across all bookstore components to ensure a premium user experience and maintainability.

## Component Guidelines
- **Book Cards**: Must display book cover, title, author, rating, and price clearly. Any new book card implementation must follow this structure.
- **Layout**: Use CSS Grid and Flexbox for the "Latest Items" section to ensure responsiveness across all devices.
- **Styling**: Consistent padding (16px), font-sizes (16px for body, 20px for titles), and colors (#333333, #f5f5f5) are mandatory.
- **State**: Always ensure loading states (spinners/skeletons) are displayed while fetching books.
- **Consistency**: All buttons must have a 0.3s transition effect on hover.

## Why this is important
This skill serves as the single source of truth for the AI architect. By adhering to these strict UI/UX guidelines, we prevent design drift, ensure the bookstore maintains its minimalist light-themed aesthetic, and significantly reduce the time required for UI debugging. All frontend changes must be validated against these standards before deployment to ensure modularity.
