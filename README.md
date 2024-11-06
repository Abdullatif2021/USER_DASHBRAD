# User Dashboard Project

## Overview

The User Dashboard is an Angular-based web application designed to showcase a list of users with pagination, a search functionality, and a detailed view for each user. This project demonstrates the use of Angular's advanced features, including NgRx for state management, custom components, directives, animations, and Angular Material components.

## Features

1. **User List with Pagination**:

   - Displays a paginated list of users, fetched from an API.
   - Uses a custom pagination component for enhanced control over the pagination UI.

2. **Search Functionality**:

   - Instant search in the header for finding users by ID.
   - Updates the displayed list based on the search input.

3. **User Details View**:

   - Allows users to click on a user card to view more detailed information about that user.
   - Includes a back button to navigate back to the main list.

4. **Loading Indicator**:

   - Displays a loading progress bar while data is being fetched from the API.

5. **Custom Hover Directive**:

   - Provides a hover effect on user cards to improve interactivity and user experience.

6. **Styling and Animations**:

   - Custom styling for a polished UI, including shadows, rounded images, and modern layouts.
   - Fade-in animations for a smooth user experience when data loads.

7. **NgRx State Management**:
   - Manages the application state, including user data and pagination, using NgRx store, actions, and effects.
   - Implements caching to avoid redundant API requests.

## Setup and Installation

### Prerequisites

- **Node.js** (v18.16.0 recommended)
- **Angular CLI** (v18.2.11)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd user-dashboard
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── user-list/
│   │   └── user-details/
│   ├── state/
│   │   ├── user.actions.ts
│   │   ├── user.reducer.ts
│   │   ├── user.selectors.ts
│   │   └── user.effects.ts
│   ├── services/
│   │   └── user.service.ts
│   └── app.config.ts
├── assets/
├── environments/
└── main.ts
```

### Key Components

1. **Header Component**: Contains the search functionality.
2. **User List Component**: Displays the list of users with pagination and individual user cards.
3. **User Details Component**: Shows detailed information about a selected user.
4. **Custom Pagination Component**: Handles pagination and emits page change events.

### State Management (NgRx)

- **Actions**: Defined in `user.actions.ts`, include actions for loading users and handling API responses.
- **Reducer**: Defined in `user.reducer.ts`, updates the state based on dispatched actions.
- **Selectors**: Defined in `user.selectors.ts`, to access user data and total count in the store.
- **Effects**: Defined in `user.effects.ts`, handles side effects like API calls.

### Services

- **User Service**: Interacts with the API to fetch users and user details.

### Styling and Animations

- **Custom Styles**: Defined in component-specific `.scss` files for the layout, shadow effects, rounded images, and responsive design.
- **Animations**: Used Angular’s animation library to add fade-in effects for user cards and smooth transitions.

## API

The project uses the following endpoints from `reqres.in` for demonstration:

1. **List of Users** (paginated): `https://reqres.in/api/users?page={page}`
2. **User Details**: `https://reqres.in/api/users/{id}`

## Usage

1. **View the List**: Access the paginated list of users on the main screen.
2. **Search**: Use the search bar in the header to filter users by ID.
3. **Pagination**: Use the pagination component to navigate through pages of users.
4. **View Details**: Click on a user card to view more detailed information about the user.

## Custom Directives and Enhancements

- **Hover Directive**: Adds a subtle shadow effect when hovering over user cards.
- **Loading State**: A `mat-progress-bar` shows up during API calls to indicate loading.

## Known Issues and Workarounds

- **NgRx Warning**: Sometimes issues can arise due to Angular version compatibility. Ensure all dependencies are compatible with the Angular version in use.
- **Pagination Styling**: The pagination component is custom-built, so any design changes can be made directly in `custom-pagination.component.scss`.

## License

This project is open-source and free to use.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or report issues.

---
