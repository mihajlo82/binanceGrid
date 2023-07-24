import Table from "./components/table/Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 5,
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <main>
        <Table />
      </main>
    </QueryClientProvider>
  );
}

export default App;
