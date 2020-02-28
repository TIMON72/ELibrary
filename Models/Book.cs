using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Book
    {
        public int BookId { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Genre { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime Year { get; set; }

        public override string ToString()
        {
            return string.Format("{0};{1};{2};{3};{4};{5}", 
                BookId, Author, Category, Genre, Name, Year); 
        }
    }
}