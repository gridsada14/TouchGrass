namespace Touchgrass.Models
{
    public class ActivityModel
    {
        public string? Title { get; set; }
        public int MaxMember { get; set; }
        public List<Member>? Member { get; set; }
        public Member? Host { get; set; }
        public int Ids { get; set; }
        
        public string? Description { get; set; }
        
        public List<string>? Tag { get; set; }
        
        public string? Place { get; set; }
        
        public List<string>? Img { get; set; }
        
        public string? ExpireDate { get; set; }
        public string? Date { get; set; }
    }

}
