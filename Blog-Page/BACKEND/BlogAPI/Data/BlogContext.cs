using Microsoft.EntityFrameworkCore;
using BlogAPI.Models;
 
namespace BlogAPI.Data
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions<BlogContext> options) : base(options) { }
 
        public DbSet<Blog> Blogs { get; set; }
    }
}