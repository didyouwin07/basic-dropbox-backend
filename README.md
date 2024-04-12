# Note

Link to the front-end repo is - https://github.com/didyouwin07/basic-dropbox-frontend

# Backend Node.js App with Express.js

This repository contains a backend Node.js app using Express.js as the server. The app provides APIs for uploading, downloading, and listing files.

## Running the App

Follow these steps to run the backend Node.js app:

### Prerequisites

- Node.js installed on your system. You can download and install Node.js from [here](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/didyouwin07/basic-dropbox-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

Before running the app, note the default authentication parameters:

- **Default Authentication Parameters**:
  - `auth`: `true`
  - `username`: `admin`
  - `pass`: `password`

  For authentication, make sure to include these parameters in the headers of your request.

### Running the App

Once you have configured the authentication parameters, you can run the app using the following command:

```bash
npm start
