namespace BlogAPI.Models{

public class Blog{
    public int Id { get; set;}
    public string? Title { get; set;} 
    public string? Author { get; set;} 
    public string? Content { get; set;} 
    public DateTime? PublishDate { get; set;}
    public string? Category   { get; set;}
}
}
