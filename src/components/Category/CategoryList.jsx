import CategoryCard from './CategoryCard';
import { categories } from '../../data/quizData';

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
