# Customer and Task Management Portal

A multilingual customer and task management portal built with Next.js. The application gives teams one place to review dashboard statistics, manage customers, create and track tasks, update task status, and switch between Arabic and English.

The frontend communicates with an external REST API. This repository contains the web application, its UI, localization, theme controls, and API client functions; it does not contain the backend service or database.

## What the Project Does

- View total customers and tasks on the dashboard.
- Review pending, in-progress, and completed task counts.
- See recent tasks with their customer, status, and due date.
- List, search, add, edit, and delete customers.
- List, search, filter, add, and delete tasks.
- Filter tasks by status or customer.
- Open task details and change a task status.
- Choose light or dark mode, or use the operating system theme preference.
- Switch between Arabic and English.
- Automatically use right-to-left layout for Arabic and left-to-right layout for English.

## Application Routes

All application routes are locale-prefixed. The supported URL prefixes are `/ar` and `/en`; Arabic is the default locale.

| Route                             | Purpose                                        |
| --------------------------------- | ---------------------------------------------- |
| `/[locale]`                       | Locale dashboard entry point                   |
| `/[locale]/dashboard`             | Dashboard statistics and recent tasks          |
| `/[locale]/customers`             | Customer list, search, and delete actions      |
| `/[locale]/customers/addCustomer` | Add a customer                                 |
| `/[locale]/customers/[id]`        | Edit an existing customer                      |
| `/[locale]/tasks`                 | Task list, search, filters, and delete actions |
| `/[locale]/tasks/addTask`         | Add a task and assign it to a customer         |
| `/[locale]/tasks/[id]`            | View task details and update status            |
| `/[locale]/settings`              | Change language and theme                      |

## Main Project Areas

```text
app/[locale]/
	components/       Reusable UI, tables, forms, filters, dialogs, and controls
	customers/        Customer list, creation, and edit routes
	dashboard/        Dashboard data loading and presentation
	services/         Functions that call the external customer/task API
	settings/         Language and theme settings
	tasks/            Task list, creation, and detail routes
	types/            TypeScript models for customers, tasks, and statistics
	globals.css       Global Tailwind and page styles
	layout.tsx        Locale layout, providers, language, and text direction

i18n/               next-intl routing and message loading configuration
messages/           English and Arabic translation catalogs
public/icons/       Navigation icons
proxy.ts             Locale-aware request middleware for next-intl
providers.tsx       Client-side next-themes provider
```

## External API

Set `NEXT_PUBLIC_URL` to the base URL of the backend API. The service functions append the resource paths below.

```env
NEXT_PUBLIC_URL=https://your-api.example.com
```

There is currently no committed `.env.example` file. Create a local `.env.local` file in the project root and define the variable there.

### Dashboard

```text
GET /dashboard
```

The dashboard expects a response with this general shape:

```json
{
  "data": {
    "statistics": {
      "totalCustomers": 0,
      "totalTasks": 0,
      "pendingTasks": 0,
      "inProgressTasks": 0,
      "completedTasks": 0
    },
    "recentTasks": []
  }
}
```

### Customers

Customer requests are implemented in `app/[locale]/services/customer.service.ts`.

```text
GET    /customers
GET    /customers/:id
POST   /customers
PATCH  /customers/:id
DELETE /customers/:id
```

Customer create and update requests use `name`, `email`, and `company`. The client removes the local `id` field before sending create or update data.

### Tasks

Task requests are implemented in `app/[locale]/services/task.service.ts`.

```text
GET    /tasks
GET    /tasks/:id
POST   /tasks
PATCH  /tasks/:id
DELETE /tasks/:id
```

Task creation sends `title`, `description`, `dueDate`, `customerId`, and `status`. Status updates send a `status` value for the selected task. The supported status values are:

```text
PENDING
IN_PROGRESS
COMPLETED
```

These values are kept unchanged for API requests and filtering. Only their displayed labels are translated.

## Technology Stack

### Framework and language

- **Next.js 16**: React framework using the App Router, server components, dynamic locale routes, server-side data loading, and production builds.
- **React 19**: Builds interactive client components such as forms, filters, dialogs, theme controls, and status buttons.
- **TypeScript**: Provides types for route props, customer records, tasks, dashboard statistics, and component properties.

### Styling and UI

- **Tailwind CSS 4**: Utility classes provide layout, spacing, colors, responsive behavior, borders, typography, and dark mode.
- **`@tailwindcss/postcss`**: Connects Tailwind CSS to the PostCSS build pipeline.
- **`next/font`**: Loads and optimizes Geist and Geist Mono in the locale layout.
- **Next Image**: Displays navigation icons from `public/icons`.

### Internationalization

- **`next-intl`**: Provides locale routing, translation loading, `useTranslations` for client components, `getTranslations` for server pages, and locale-aware navigation.
- **`messages/en.json`**: English translations.
- **`messages/ar.json`**: Arabic translations.
- **`i18n/routing.ts`**: Defines `en` and `ar` and sets Arabic as the default.
- **`i18n/request.ts`**: Loads the message catalog for the active locale.
- **`proxy.ts`**: Applies the next-intl routing middleware to incoming requests.

The locale layout sets `lang` and `dir` from the active route. Arabic uses `dir="rtl"`; English uses `dir="ltr"`.

### Theme management

- **`next-themes`**: Stores and applies the selected theme through the document `class` attribute.
- **`app/providers.tsx`**: Provides the theme context to the application.
- **`app/[locale]/theme.toggle.tsx`**: Offers light and dark theme buttons.
- **Tailwind dark variant**: Applies `dark:*` classes when the document has the `dark` class.

### Code quality and build tools

- **ESLint 9**: Checks the project with `npm run lint`.
- **`eslint-config-next`**: Provides Next.js and React-specific lint rules.
- **PostCSS**: Processes the Tailwind stylesheet.
- **Next.js TypeScript checks**: Runs during `next build`.

## How the Application Is Structured

Route pages that load API data are server components by default. They call service functions and pass the resulting data into presentation components.

Components that need browser interaction use the `"use client"` directive. These include search and filter controls, forms, dialogs, task status buttons, theme and language controls, and table actions.

The normal data flow is:

1. `proxy.ts` matches the locale route.
2. A server page calls the relevant API service function.
3. Response data is passed to a page or client component.
4. Client components manage local form, search, filter, and dialog state.
5. Mutations call service functions using `POST`, `PATCH`, or `DELETE`.
6. List pages refresh server data after deletion.

## Localization Pattern

Translations are grouped into namespaces such as `Dashboard`, `Customers`, `Tasks`, `Forms`, `Settings`, and `Status`.

Client components use:

```tsx
const t = useTranslations("Customers");
const label = t("pageTitle");
```

Server pages use:

```tsx
const t = await getTranslations("Tasks");
const title = t("pageTitle");
```

When adding visible text, add the same key to both `messages/en.json` and `messages/ar.json`.

## Getting Started

### Requirements

- Node.js compatible with the installed Next.js version
- npm
- A running backend API implementing the endpoints described above

### Installation

```bash
npm install
```

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_URL=http://localhost:your-api-port
```

Replace the example value with the actual backend URL.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use a locale-prefixed URL such as `/ar` or `/en` if the middleware does not redirect automatically.

### Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

The project currently has no automated test script configured in `package.json`.

## Important Notes and Current Limitations

- The backend API and database are external and must be available for customer, task, and dashboard data to load.
- The application does not include authentication or authorization.
- API caching and revalidation are not explicitly configured.
- Forms show temporary success and error messages but do not show a submission loading state.
- Customer email validation accepts addresses containing `@` and ending in `.com`.
- API error responses are expected to contain a `message` field when available.
- There is no committed environment example file yet; local setup requires creating `.env.local` manually.
- The service function name `getCutomerById` contains a spelling mistake, but it is used consistently by the current customer detail route.

## Available npm Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the Next.js development server       |
| `npm run build` | Create an optimized production build       |
| `npm run start` | Start the production server after building |
| `npm run lint`  | Run ESLint                                 |

## License

No license file is currently included in the repository.
