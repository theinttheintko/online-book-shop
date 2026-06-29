# Skill: Bookstore UI Standards

This skill enforces consistent design across all bookstore components to ensure a premium user experience and maintainability.

## Component Guidelines
- **Book Cards**: Must display book cover, title, author, rating, and price clearly. Any new book card implementation must follow this structure to ensure data visibility.
- **Layout**: Use CSS Grid and Flexbox for the "Latest Items" section to ensure full responsiveness across mobile, tablet, and desktop screens. Avoid using fixed positioning for core content containers.
- **Styling**: Ensure consistent padding (16px), font-sizes (16px for body, 20px for titles), and color usage (#333333 for text, #f5f5f5 for cards).
- **State**: Always ensure loading states (spinners or skeletons) are displayed while fetching books from the backend API to prevent layout shifts.
- **Consistency**: All buttons must have a 0.3s transition effect on hover to maintain visual harmony and provide tactile feedback to the user.

## Why this is important
This skill serves as the single source of truth for the AI architect. By adhering to these strict UI/UX guidelines, we prevent design drift, ensure the bookstore maintains its minimalist light-themed aesthetic, and significantly reduce the time required for UI debugging or refactoring. All frontend changes must be validated against these standards before deployment to ensure that the code base remains modular, readable, and perfectly aligned with the project's design language.
