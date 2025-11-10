const BASE_URL = "https://api.slingacademy.com/v1/sample-data/blog-posts";

export const getBlogs = async ({ 
  page = 1,
  limit = 6
}: {
  page?: number;
  limit?: number;
} = {}) => {
  const offset = (page - 1) * limit;
  const url = `${BASE_URL}?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      blogs: data.blogs || [],
      totalBlogs: data.total_blogs || 0,
      totalPages: Math.ceil((data.total_blogs || 0) / limit),
      currentPage: page,
    };
  } catch (error) {
    console.error("Error in getBlogs:", error);
    throw error;
  }
};

export const getBlogById = async (id: string | number) => {
  // Convert to string and validate
  const blogId = String(id).trim();
  
  if (!blogId || blogId === 'undefined' || blogId === 'null' || blogId === '') {
    console.error('Invalid ID provided to getBlogById:', id);
    return null;
  }

  const url = `${BASE_URL}/${blogId}`;

  try {
    console.log('Fetching blog from URL:', url);
    
    const response = await fetch(url, {
      next: { 
        revalidate: 3600
      }
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Blog with ID ${blogId} not found (404)`);
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Full API response:', data);
    
    // Sling Academy API returns blog in `data.blog` property
    if (data.success && data.blog) {
      return data.blog;
    } else {
      console.log('Blog not found in response data');
      return null;
    }
  } catch (error) {
    console.error("Error in getBlogById for ID", blogId, ":", error);
    return null;
  }
};
