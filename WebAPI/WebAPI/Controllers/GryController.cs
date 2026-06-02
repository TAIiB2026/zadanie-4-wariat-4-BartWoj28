using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GryController : ControllerBase
    {
        private static readonly List<Gra> _gry = new()
        {
            new Gra { Id = 1, Tytul = "Wiedźmin 3: Dziki Gon", Cena = 149.99m, DataPremiery = new DateTime(2015, 5, 19) },
            new Gra { Id = 2, Tytul = "Dark Souls 3", Cena = 199.99m, DataPremiery = new DateTime(2016, 3, 24) },
            new Gra { Id = 3, Tytul = "Elden Ring", Cena = 249.00m, DataPremiery = new DateTime(2022, 2, 25) }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_gry);
        }

        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var gra = _gry.FirstOrDefault(g => g.Id == id);

            if (gra == null)
                return NotFound();

            return Ok(gra);
        }

        [HttpPost]
        public IActionResult Post([FromBody] GraFormDto dto)
        {
            int newId = _gry.Any() ? _gry.Max(g => g.Id) + 1 : 1;

            var nowaGra = new Gra
            {
                Id = newId,
                Tytul = dto.Nazwa,   
                Cena = dto.Cena,
                DataPremiery = dto.Data
            };

            _gry.Add(nowaGra);

            return Ok(true);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] GraFormDto dto)
        {
            var gra = _gry.FirstOrDefault(g => g.Id == id);

            if (gra == null)
                return NotFound(false);

            gra.Tytul = dto.Nazwa;
            gra.Cena = dto.Cena;
            gra.DataPremiery = dto.Data;

            return Ok(true);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var gra = _gry.FirstOrDefault(g => g.Id == id);

            if (gra == null)
                return NotFound(false);

            _gry.Remove(gra);

            return Ok(true);
        }

    }
}