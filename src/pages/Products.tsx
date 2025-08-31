import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { mockProducts, categories, sizes, colors } from '@/data/mockProducts';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSizes = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    const matchesColors = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    
    return matchesSearch && matchesCategory && matchesSizes && matchesColors;
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-oswald font-bold text-4xl md:text-5xl mb-4">
            ALL <span className="text-glow">PRODUCTS</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of premium streetwear tees
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            FILTERS
          </Button>

          {/* View Mode Toggle */}
          <div className="flex border border-border rounded-lg overflow-hidden">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-none"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-64 flex-shrink-0`}>
            <div className="card-product p-6 sticky top-24">
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-oswald font-semibold text-lg mb-4">CATEGORIES</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${
                        selectedCategory === category 
                          ? 'bg-primary text-primary-foreground font-semibold' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-oswald font-semibold text-lg mb-4">SIZES</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-2 border rounded-lg font-medium transition-colors duration-300 ${
                        selectedSizes.includes(size)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-oswald font-semibold text-lg mb-4">COLORS</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1 text-sm border rounded-full transition-colors duration-300 ${
                        selectedColors.includes(color)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedCategory !== 'All') && (
                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedSizes([]);
                    setSelectedColors([]);
                  }}
                >
                  CLEAR FILTERS
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            
            {/* Active Filters */}
            {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedCategory !== 'All') && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCategory !== 'All' && (
                  <Badge variant="secondary">Category: {selectedCategory}</Badge>
                )}
                {selectedSizes.map(size => (
                  <Badge key={size} variant="secondary">Size: {size}</Badge>
                ))}
                {selectedColors.map(color => (
                  <Badge key={color} variant="secondary">Color: {color}</Badge>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {mockProducts.length} products
              </p>
            </div>

            {/* Products */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">
                  No products found matching your filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setSearchTerm('');
                  }}
                >
                  CLEAR ALL FILTERS
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;