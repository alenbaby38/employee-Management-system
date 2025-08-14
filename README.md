# Employee Management System

A **full-stack employee management platform** built with **Spring Boot** (backend) and **Angular 19** (frontend), featuring **OAuth2 + JWT authentication**, role-based access control, project/task management, automated email notifications, and insightful reporting dashboards.  

## 🚀 Features

### 🔐 Authentication & Authorization
- **OAuth2 + JWT** based login system.
- **Two roles**: `Manager` and `Employee`.
- Role-based access to features and endpoints.

### 📧 Email Notifications
- **Custom Email Sending** (Manager → Employees).
- **Quartz Scheduler** to send automatic **Daily Status Report (DSR) reminders**.
- Email notifications for project/task updates.

### 📊 Manager Dashboard
- View **Top 5 employees** with the highest time spent on DSRs.
- Interactive **charts & graphs** powered by **Syncfusion**.
- View individual employee DSRs.
- Manage and assign **projects** and **tasks** to employees.

### 📝 Employee Dashboard
- Submit **Daily Status Reports**.
- View and update assigned **tasks**.
- Receive project/task updates and email notifications.

### 📦 Tech Stack
#### Backend
- **Java 17**
- **Spring Boot** (Spring MVC, Spring Security, Spring Data MongoDB)
- **Quartz Scheduler**
- **OAuth2 + JWT**
- **MongoDB** (Database)
- **JavaMailSender** for email notifications

#### Frontend
- **Angular 19**
- **Syncfusion** for charts & data visualization
- Responsive UI

## ⚙️ Installation

### Prerequisites
- Java 17+
- Node.js & npm
- MongoDB
- Maven

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system/backend

# Build and run the backend
mvn clean install
mvn spring-boot:run
