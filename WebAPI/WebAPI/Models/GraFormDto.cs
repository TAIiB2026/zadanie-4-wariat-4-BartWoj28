namespace WebAPI.Models
{
    // Ten model idealnie pasuje do parametrów z FormSubmitInterface
    public class GraFormDto
    {
        public string Nazwa { get; set; }
        public decimal Cena { get; set; }
        public DateTime Data { get; set; }
    }
}