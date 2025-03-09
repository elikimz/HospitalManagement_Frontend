// ErrorPage component (create pages/ErrorPage.tsx)
const ErrorPage: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 Not Found</h1>
        <p className="text-lg mt-2">The page you are looking for doesn’t exist.</p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Home</a>
      </div>
    );
  };
  
  export default ErrorPage;