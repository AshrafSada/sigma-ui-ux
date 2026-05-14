import SampleComponent from '../components/SampleComponent';

const page = () => {
  return (
    <main className="flex-1 flex items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Welcome to Sigma UI/UX Designer
        </h1>
        <h2 className="text-lg text-gray-600 mb-8">
          Please sign in to access the design tools and collaborate with your team.
        </h2>
      </section>
    </main>
  );
};

export default page;
