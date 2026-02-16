import Header from '../components/Common/Header';
import CategoryList from '../components/Category/CategoryList';

export default function Categories() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Pilih Kategori
            </h1>
            <p className="text-gray-600">
              Mau belajar apa hari ini? 🤔
            </p>
          </div>

          <CategoryList />
        </div>
      </main>
    </>
  );
}
