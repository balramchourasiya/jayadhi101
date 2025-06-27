# Server

Express.js server with TypeScript and ESM support.

## Setup

```bash
npm install
```

## Development

### Using ts-node-dev (Recommended)
```bash
npm run dev
# or
npm start
```

### Using tsx (Alternative)
```bash
npm run dev:tsx
```

## Production

```bash
# Build the project
npm run build

# Serve the built files
npm run serve
```

## Scripts

- `npm run dev` - Start development server with hot reload (ts-node-dev)
- `npm run dev:tsx` - Start development server with hot reload (tsx)
- `npm run build` - Build TypeScript to JavaScript
- `npm run serve` - Serve the built JavaScript files

## Features

- ✅ TypeScript support
- ✅ ESM modules
- ✅ Hot reload during development
- ✅ No experimental warnings
- ✅ Express.js framework
- ✅ Source maps for debugging

## Port

The server runs on port 5000 by default. 