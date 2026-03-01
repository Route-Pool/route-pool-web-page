# Route-Pool

Modernizing urban logistics across Nigeria. Route-Pool is a sophisticated delivery web application designed to connect retailers and riders seamlessly, ensuring easy access to delivery points and efficient batch process management.

![Route-Pool Banner](https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop)

## Features

Route-Pool is split into two specialized modes with tailor-made interfaces and experiences:

### 🏪 Retailer Mode
- **Delivery Management:** Create new delivery requests, manage endpoints, and calculate logistics seamlessly.
- **Real-Time Tracking:** Monitor assigned riders, check batch progress, and verify drop-offs.
- **Wallet & History:** Easily handle payouts and review past operational records.
- **Secure Authentication:** Standard OTP-based driver verifications for secure handoffs.

### 🛵 Rider Mode
- **Batch Matrix Dashboard:** Filter and select available delivery nodes and multi-dropoff batches mapped dynamically.
- **Verification Protocol:** Utilize alphanumeric, backend-synchronized codes to confirm drop-offs.
- **Earnings Tracker:** Live updates on "Terminal Revenue", recent mission synchronization, and account withdrawal features.
- **Profile Configuration:** Update ID Proofs, Government documentation, and operational preferences.

## Technology Stack

- **Frontend Framework:** [React.js](https://reactjs.org/) powered by [Vite](https://vitejs.dev/) for extremely fast Hot Module Replacement (HMR) and optimized building.
- **Routing:** [React Router V6](https://reactrouter.com/) handling dynamic transitions between driver and retailer layouts.
- **Styling System:** Modular CSS integrated with custom-crafted inline architectures for pixel-perfect translation from Figma.
- **Icons:** [Lucide React](https://lucide.dev/)
- **Network Interface:** [Axios](https://axios-http.com/) configured with centralized interception for secure token injection (`src/services/api.js`).

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16+) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Route-Pool/Route-pool-Web-page.git
   cd Route-pool-Web-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (alongside `package.json`) and configure your backend node:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Integration

The frontend connects directly to the Route-Pool Backend architecture. The endpoints map to `src/services/api.js`.

- **Authentication:** `POST /api/auth/signup`, `POST /api/auth/verify-otp`
- **Delivery Flow:** `POST /api/deliveries`, `GET /api/deliveries`
- **Agile Batching:** `GET /api/batches`, `PUT /api/batches/:id`
- **Trust Architecture:** Generates & Verifies 8-digit secure alphanumeric codes on delivery wrap-ups.

## License

All rights reserved by the Route-Pool Team natively operating in Nigeria.
