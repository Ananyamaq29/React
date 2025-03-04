using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlogAPI.Models;
using BlogAPI.Data;

namespace BlogAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly BlogContext _context;

        public BlogsController(BlogContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blog>>> GetBlogs()
        {
            return await _context.Blogs.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Blog>> GetBlog(int id)
        {
            var blog = await _context.Blogs.FindAsync(id);

            if (blog == null)
            {
                return NotFound();
            }

            return Ok(blog);
        }

        [HttpPost]
        public async Task<ActionResult<Blog>> PostBlog(Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { status = 400, errors = "Missing fields." });
            }

            // Check for missing required fields
            if (string.IsNullOrEmpty(blog.Title) || string.IsNullOrEmpty(blog.Author) ||
                string.IsNullOrEmpty(blog.Content) || blog.PublishDate == default || string.IsNullOrEmpty(blog.Category))
            {
                return BadRequest(new { status = 400, errors = "Missing fields." });
            }

            _context.Blogs.Add(blog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogs", new { id = blog.Id }, blog);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlog(int id, Blog blog)
        {
            if (id != blog.Id)
            {
                return BadRequest(new { status = 400, errors = "Blog ID mismatch." });
            }

            var existingBlog = await _context.Blogs.FindAsync(id);
            if (existingBlog == null)
            {
                return NotFound(new { status = 404, errors = "Blog not found." });
            }

            // Check for missing required fields
            if (string.IsNullOrEmpty(blog.Title) || string.IsNullOrEmpty(blog.Author) ||
                string.IsNullOrEmpty(blog.Content) || blog.PublishDate == default || string.IsNullOrEmpty(blog.Category))
            {
                return BadRequest(new { status = 400, errors = "Missing fields." });
            }

            _context.Entry(existingBlog).State = EntityState.Detached;
            _context.Entry(blog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Blogs.Any(e => e.Id == id))
                {
                    return NotFound(new { status = 404, errors = "Blog not found." });
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlog(int id)
        {
            var blog = await _context.Blogs.FindAsync(id);
            if (blog == null)
            {
                return NotFound(new { status = 404, errors = "Blog not found." });
            }

            _context.Blogs.Remove(blog);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
