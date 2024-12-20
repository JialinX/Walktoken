# Walktoken

Build on server: [https://walktoken-a.vercel.app/](https://walktoken-a.vercel.app/) 

Backup build: [https://walktoken-kohl.vercel.app/](https://walktoken-kohl.vercel.app/)

Demo video: [https://www.youtube.com/watch?v=WbGGhPSaE7o](https://www.youtube.com/watch?v=WbGGhPSaE7o)

# How to Run Our Project on localhost

## Step 1: Clone the Repository
Clone our repository using the following command:

```bash
git clone https://github.com/WildernessStars/Walktoken.git
cd Walktoken
```

## Step 2: Add Dependencies
Install all necessary dependencies with this command:

```bash
pnpm i
```

## Step 3: Add Environment Variable
Create a .env file, set PRIVATE_KEY and MNEMONIC. ie. Replace xxx with your own PRIVATE_KEY and MNEMONIC
```bash
PRIVATE_KEY=YOUR_OWN_PRIVATE_KEY
MNEMONIC="YOUR_OWN_MNEMONIC"
```
## Step 4: Compile the Project
Compile the project by running:

```bash
pnpm run compile
```
## Step 4.1 (optional): Run Tests
Run the tests with the following command:

```bash
pnpm run test
```
## Step 5: Run the GUI
### Step 5.1: Navigate to the frontend directory

```bash
cd frontend
```
### Step 5.2: Install frontend dependencies:

```bash
pnpm i
```
### Step 5.3: Build and start the server:

```bash
pnpm build
pnpm start
```
### Step 5.4: Open your browser and go to http://localhost:3000.
