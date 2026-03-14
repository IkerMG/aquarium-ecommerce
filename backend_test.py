#!/usr/bin/env python3
"""
Comprehensive Backend API Tests for Urban Natura Barcelona Spring Boot Backend
Tests all endpoints, pagination, filtering, CORS, and H2 database functionality
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, List, Any, Optional

class UrbanNaturaAPITester:
    def __init__(self, base_url="http://localhost:8080"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.session = requests.Session()
        
    def log_test(self, name: str, success: bool, details: str = ""):
        """Log test results"""
        self.tests_run += 1
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"    {details}")
        if success:
            self.tests_passed += 1
        else:
            self.failed_tests.append(f"{name}: {details}")
        print()

    def make_request(self, method: str, endpoint: str, params: Dict = None, 
                    headers: Dict = None, expected_status: int = 200) -> tuple:
        """Make HTTP request and return success status and response"""
        url = f"{self.base_url}{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)
            
        try:
            if method.upper() == 'GET':
                response = self.session.get(url, params=params, headers=default_headers)
            elif method.upper() == 'POST':
                response = self.session.post(url, json=params, headers=default_headers)
            else:
                raise ValueError(f"Unsupported method: {method}")
                
            success = response.status_code == expected_status
            return success, response
            
        except Exception as e:
            print(f"Request failed: {str(e)}")
            return False, None

    def test_basic_products_endpoint(self):
        """Test GET /api/v1/products basic functionality"""
        success, response = self.make_request('GET', '/api/v1/products')
        
        if not success:
            self.log_test("Basic Products Endpoint", False, 
                         f"Expected 200, got {response.status_code if response else 'No response'}")
            return False
            
        try:
            data = response.json()
            
            # Check required pagination fields
            required_fields = ['content', 'page', 'size', 'totalElements', 'totalPages']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                self.log_test("Basic Products Endpoint", False, 
                             f"Missing pagination fields: {missing_fields}")
                return False
                
            # Check default pagination values
            if data['page'] != 0 or data['size'] != 12:
                self.log_test("Basic Products Endpoint", False, 
                             f"Default pagination incorrect: page={data['page']}, size={data['size']}")
                return False
                
            # Check we have products
            if not data['content'] or len(data['content']) == 0:
                self.log_test("Basic Products Endpoint", False, "No products returned")
                return False
                
            self.log_test("Basic Products Endpoint", True, 
                         f"Returned {len(data['content'])} products with correct pagination structure")
            return True
            
        except json.JSONDecodeError:
            self.log_test("Basic Products Endpoint", False, "Invalid JSON response")
            return False

    def test_products_pagination(self):
        """Test pagination parameters"""
        # Test custom page size
        success, response = self.make_request('GET', '/api/v1/products', {'page': 0, 'size': 5})
        
        if success:
            data = response.json()
            if data['size'] == 5 and len(data['content']) <= 5:
                self.log_test("Products Pagination (size=5)", True, 
                             f"Correctly returned {len(data['content'])} products")
            else:
                self.log_test("Products Pagination (size=5)", False, 
                             f"Expected size=5, got size={data['size']}, content length={len(data['content'])}")
        else:
            self.log_test("Products Pagination (size=5)", False, "Request failed")
            
        # Test second page
        success, response = self.make_request('GET', '/api/v1/products', {'page': 1, 'size': 10})
        
        if success:
            data = response.json()
            if data['page'] == 1:
                self.log_test("Products Pagination (page=1)", True, 
                             f"Second page returned {len(data['content'])} products")
            else:
                self.log_test("Products Pagination (page=1)", False, 
                             f"Expected page=1, got page={data['page']}")
        else:
            self.log_test("Products Pagination (page=1)", False, "Request failed")

    def test_search_functionality(self):
        """Test search parameter filtering"""
        # Test search by name
        success, response = self.make_request('GET', '/api/v1/products', {'search': 'Crystal'})
        
        if success:
            data = response.json()
            found_crystal = any('crystal' in product['name'].lower() or 
                              'crystal' in product['description'].lower() 
                              for product in data['content'])
            
            if found_crystal:
                self.log_test("Search by Name (Crystal)", True, 
                             f"Found {len(data['content'])} products containing 'Crystal'")
            else:
                self.log_test("Search by Name (Crystal)", False, 
                             "No products found containing 'Crystal'")
        else:
            self.log_test("Search by Name (Crystal)", False, "Request failed")
            
        # Test search by description
        success, response = self.make_request('GET', '/api/v1/products', {'search': 'LED'})
        
        if success:
            data = response.json()
            found_led = any('led' in product['name'].lower() or 
                           'led' in product['description'].lower() 
                           for product in data['content'])
            
            if found_led:
                self.log_test("Search by Description (LED)", True, 
                             f"Found {len(data['content'])} products containing 'LED'")
            else:
                self.log_test("Search by Description (LED)", False, 
                             "No products found containing 'LED'")
        else:
            self.log_test("Search by Description (LED)", False, "Request failed")
            
        # Test case insensitive search
        success, response = self.make_request('GET', '/api/v1/products', {'search': 'AQUA'})
        
        if success:
            data = response.json()
            if len(data['content']) > 0:
                self.log_test("Case Insensitive Search (AQUA)", True, 
                             f"Found {len(data['content'])} products (case insensitive)")
            else:
                self.log_test("Case Insensitive Search (AQUA)", False, 
                             "No products found with case insensitive search")
        else:
            self.log_test("Case Insensitive Search (AQUA)", False, "Request failed")

    def test_category_filtering(self):
        """Test category filtering"""
        # Test acuarios category
        success, response = self.make_request('GET', '/api/v1/products', {'category': 'acuarios'})
        
        if success:
            data = response.json()
            all_acuarios = all(product['category'] == 'acuarios' for product in data['content'])
            
            if all_acuarios and len(data['content']) > 0:
                self.log_test("Category Filter (acuarios)", True, 
                             f"Found {len(data['content'])} products in 'acuarios' category")
            else:
                self.log_test("Category Filter (acuarios)", False, 
                             f"Category filtering failed or no products found")
        else:
            self.log_test("Category Filter (acuarios)", False, "Request failed")
            
        # Test plantas category
        success, response = self.make_request('GET', '/api/v1/products', {'category': 'plantas'})
        
        if success:
            data = response.json()
            all_plantas = all(product['category'] == 'plantas' for product in data['content'])
            
            if all_plantas and len(data['content']) > 0:
                self.log_test("Category Filter (plantas)", True, 
                             f"Found {len(data['content'])} products in 'plantas' category")
            else:
                self.log_test("Category Filter (plantas)", False, 
                             "Category filtering failed or no products found")
        else:
            self.log_test("Category Filter (plantas)", False, "Request failed")

    def test_subcategory_filtering(self):
        """Test subcategory filtering"""
        # Test nano subcategory
        success, response = self.make_request('GET', '/api/v1/products', {'subcategory': 'nano'})
        
        if success:
            data = response.json()
            all_nano = all(product['subcategory'] == 'nano' for product in data['content'])
            
            if all_nano and len(data['content']) > 0:
                self.log_test("Subcategory Filter (nano)", True, 
                             f"Found {len(data['content'])} products in 'nano' subcategory")
            else:
                self.log_test("Subcategory Filter (nano)", False, 
                             "Subcategory filtering failed or no products found")
        else:
            self.log_test("Subcategory Filter (nano)", False, "Request failed")
            
        # Test led-plantados subcategory
        success, response = self.make_request('GET', '/api/v1/products', {'subcategory': 'led-plantados'})
        
        if success:
            data = response.json()
            all_led_plantados = all(product['subcategory'] == 'led-plantados' for product in data['content'])
            
            if all_led_plantados and len(data['content']) > 0:
                self.log_test("Subcategory Filter (led-plantados)", True, 
                             f"Found {len(data['content'])} products in 'led-plantados' subcategory")
            else:
                self.log_test("Subcategory Filter (led-plantados)", False, 
                             "Subcategory filtering failed or no products found")
        else:
            self.log_test("Subcategory Filter (led-plantados)", False, "Request failed")

    def test_combined_filters(self):
        """Test combining multiple filters"""
        # Test search + category
        success, response = self.make_request('GET', '/api/v1/products', 
                                            {'search': 'LED', 'category': 'iluminacion'})
        
        if success:
            data = response.json()
            valid_results = all(
                product['category'] == 'iluminacion' and 
                ('led' in product['name'].lower() or 'led' in product['description'].lower())
                for product in data['content']
            )
            
            if valid_results:
                self.log_test("Combined Filters (search + category)", True, 
                             f"Found {len(data['content'])} products matching both filters")
            else:
                self.log_test("Combined Filters (search + category)", False, 
                             "Combined filtering failed")
        else:
            self.log_test("Combined Filters (search + category)", False, "Request failed")
            
        # Test category + subcategory
        success, response = self.make_request('GET', '/api/v1/products', 
                                            {'category': 'acuarios', 'subcategory': 'nano'})
        
        if success:
            data = response.json()
            valid_results = all(
                product['category'] == 'acuarios' and product['subcategory'] == 'nano'
                for product in data['content']
            )
            
            if valid_results:
                self.log_test("Combined Filters (category + subcategory)", True, 
                             f"Found {len(data['content'])} products matching both filters")
            else:
                self.log_test("Combined Filters (category + subcategory)", False, 
                             "Combined filtering failed")
        else:
            self.log_test("Combined Filters (category + subcategory)", False, "Request failed")

    def test_product_by_id(self):
        """Test GET /api/v1/products/{id}"""
        # Test valid product ID
        success, response = self.make_request('GET', '/api/v1/products/1')
        
        if success:
            data = response.json()
            required_fields = ['id', 'name', 'description', 'price', 'category', 'subcategory', 
                             'imageUrl', 'stock', 'isNew', 'brand', 'comparePrice', 'rating', 'reviews', 'slug']
            
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields and data['id'] == 1:
                self.log_test("Product by ID (valid)", True, 
                             f"Retrieved product: {data['name']}")
            else:
                self.log_test("Product by ID (valid)", False, 
                             f"Missing fields: {missing_fields}" if missing_fields else "ID mismatch")
        else:
            self.log_test("Product by ID (valid)", False, "Request failed")
            
        # Test invalid product ID (should return 404)
        success, response = self.make_request('GET', '/api/v1/products/999', expected_status=404)
        
        if success:
            self.log_test("Product by ID (invalid - 404)", True, 
                         "Correctly returned 404 for non-existent product")
        else:
            self.log_test("Product by ID (invalid - 404)", False, 
                         f"Expected 404, got {response.status_code if response else 'No response'}")

    def test_categories_endpoint(self):
        """Test GET /api/v1/products/categories"""
        success, response = self.make_request('GET', '/api/v1/products/categories')
        
        if success:
            data = response.json()
            
            if isinstance(data, list) and len(data) > 0:
                # Check structure of category objects
                first_category = data[0]
                if 'name' in first_category and 'subcategories' in first_category:
                    # Verify subcategories is a list
                    if isinstance(first_category['subcategories'], list):
                        self.log_test("Categories Endpoint", True, 
                                     f"Found {len(data)} categories with subcategories")
                    else:
                        self.log_test("Categories Endpoint", False, 
                                     "Subcategories field is not a list")
                else:
                    self.log_test("Categories Endpoint", False, 
                                 "Missing 'name' or 'subcategories' fields")
            else:
                self.log_test("Categories Endpoint", False, 
                             "No categories returned or invalid format")
        else:
            self.log_test("Categories Endpoint", False, "Request failed")

    def test_cors_headers(self):
        """Test CORS configuration"""
        # Test preflight request
        headers = {
            'Origin': 'http://localhost:5173',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        
        try:
            response = self.session.options(f"{self.base_url}/api/v1/products", headers=headers)
            
            cors_headers = {
                'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
                'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
                'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
            }
            
            if cors_headers['Access-Control-Allow-Origin'] == 'http://localhost:5173':
                self.log_test("CORS Headers", True, 
                             f"CORS properly configured for http://localhost:5173")
            else:
                self.log_test("CORS Headers", False, 
                             f"CORS origin mismatch: {cors_headers['Access-Control-Allow-Origin']}")
                
        except Exception as e:
            self.log_test("CORS Headers", False, f"CORS test failed: {str(e)}")

    def test_h2_console_access(self):
        """Test H2 console accessibility"""
        try:
            response = self.session.get(f"{self.base_url}/h2-console")
            
            if response.status_code == 200:
                self.log_test("H2 Console Access", True, 
                             "H2 console is accessible at /h2-console")
            else:
                self.log_test("H2 Console Access", False, 
                             f"H2 console returned status {response.status_code}")
                
        except Exception as e:
            self.log_test("H2 Console Access", False, f"H2 console test failed: {str(e)}")

    def test_database_seeding(self):
        """Test that database is properly seeded with 16 products"""
        success, response = self.make_request('GET', '/api/v1/products', {'size': 100})
        
        if success:
            data = response.json()
            total_products = data['totalElements']
            
            if total_products == 16:
                self.log_test("Database Seeding", True, 
                             f"Database correctly seeded with {total_products} products")
            else:
                self.log_test("Database Seeding", False, 
                             f"Expected 16 products, found {total_products}")
        else:
            self.log_test("Database Seeding", False, "Could not verify product count")

    def run_all_tests(self):
        """Run all test suites"""
        print("🚀 Starting Urban Natura Barcelona Backend API Tests")
        print("=" * 60)
        
        # Basic functionality tests
        print("📋 Testing Basic Functionality...")
        self.test_basic_products_endpoint()
        self.test_database_seeding()
        
        # Pagination tests
        print("📄 Testing Pagination...")
        self.test_products_pagination()
        
        # Search and filtering tests
        print("🔍 Testing Search & Filtering...")
        self.test_search_functionality()
        self.test_category_filtering()
        self.test_subcategory_filtering()
        self.test_combined_filters()
        
        # Individual product tests
        print("🎯 Testing Individual Product Retrieval...")
        self.test_product_by_id()
        
        # Categories endpoint tests
        print("📂 Testing Categories Endpoint...")
        self.test_categories_endpoint()
        
        # Infrastructure tests
        print("🔧 Testing Infrastructure...")
        self.test_cors_headers()
        self.test_h2_console_access()
        
        # Print final results
        print("=" * 60)
        print(f"📊 TEST RESULTS: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for failed_test in self.failed_tests:
                print(f"   • {failed_test}")
        else:
            print("\n🎉 ALL TESTS PASSED!")
            
        return self.tests_passed == self.tests_run

def main():
    """Main test execution"""
    tester = UrbanNaturaAPITester()
    
    try:
        success = tester.run_all_tests()
        return 0 if success else 1
        
    except KeyboardInterrupt:
        print("\n⚠️  Tests interrupted by user")
        return 1
    except Exception as e:
        print(f"\n💥 Test execution failed: {str(e)}")
        return 1

if __name__ == "__main__":
    sys.exit(main())