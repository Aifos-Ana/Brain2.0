import Layout from "../components/Layout"; 

function Home() {
  return (
    <Layout>
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to your Personal OS</h1>
      </div>
    </Layout>
  );
}

export default Home;