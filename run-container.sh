docker run -d -p 5170:5170 --name dashboarding -e DASHBOARDING_ENV=local -e DASHBOARDINGSVC_DB_HOST=dashbackend -e DASHBOARDINGSVC_DB_PORT=3101 --network dashboard-network dashboarding:0.0.1
