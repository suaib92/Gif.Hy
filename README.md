# GIF Search Application

This is a GIF Search application built with **Next.js** that allows users to search for GIFs, view trending GIFs, filter by categories, and manage their favorite GIFs. The application uses the Giphy API to fetch and display GIFs.

## Features

- **Search GIFs**: Search for GIFs by entering a query in the search bar.
- **Trending GIFs**: View a list of trending GIFs.
- **Category Filter**: Filter GIFs by different categories.
- **Favorites**: Add GIFs to a favorites list for easy access later.
- **Pagination**: Navigate through pages of GIF results.
- **Load More Results**: Continue loading more GIFs from the homepage without searching.
- **Server-Side Rendering (SSR)**: Next.js provides SSR for optimized performance and SEO.

## Technologies Used

- **Next.js**: A React framework with hybrid static and server rendering, and route-based code splitting.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs.
- **Giphy API**: Used for fetching GIF data.
- **LocalStorage**: Used for storing user favorites.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v14 or later
- **npm**: v6 or later

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/gif-search-app.git
   cd gif-search-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env.local` file in the root directory to store environment variables:**

   ```plaintext
   NEXT_PUBLIC_GIPHY_API_KEY=your_giphy_api_key_here
   ```

   Replace `your_giphy_api_key_here` with your Giphy API key. You can obtain a Giphy API key by signing up at [Giphy Developers](https://developers.giphy.com/).

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will open in your default web browser, or you can visit `http://localhost:3000` to view it.

### Building and Starting for Production

To build the application for production, run:

```bash
npm run build
```

Then, to start the production server:

```bash
npm run start
```

## Usage

- **Search for GIFs**: Enter a search term in the search bar and press "Enter" or click the "Search" button.
- **View Trending GIFs**: Clear the search input to see trending GIFs.
- **Filter by Categories**: Use the category dropdown to filter GIFs by specific categories.
- **Add/Remove Favorites**: Click the heart icon on any GIF to add or remove it from your favorites.
- **Navigate Pages**: Use the pagination controls to move between pages of results.
- **Load More Results**: Click the "Show me more results" button to load more trending GIFs on the homepage.

## File Structure

Here’s a brief overview of the main files and directories in this project:

```
gif-search-app/
│
├── public/                  # Public assets
│
├── src/                     # Source files
│   ├── components/          # Reusable components (GifCard, NavBar, etc.)
│   ├── hooks/               # Custom React hooks (useGifFetch, useFavorites)
│   ├── pages/               # Next.js page components (index.js, _app.js, etc.)
│   ├── services/            # Services for API requests (giphyService.js)
│   ├── styles/              # Global styles and Tailwind setup
│   ├── utils/               # Utility functions
│   ├── .env.local           # Environment variables for development
│   └── README.md            # Project documentation
│
├── package.json             # NPM dependencies and scripts
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcomed.

1. **Fork the repository**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit a pull request**

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

If you have any questions, feel free to contact [Mohd Suaib Warsi ](mailto:suaib8211@gmail.com).

