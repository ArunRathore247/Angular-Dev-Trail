import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Our environmental project are providing many environmental benefits arround the world.';

  mockData: any[] = [
    {
      name: 'Kariba Redd+- Zimbabwe',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Reduced Emissions from Deforestation and Degradation',
      weight: '957,842',
      description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe. forming a gaint biodiversity corridor.',
      cost: 7.50
    },
    {
      name: 'Arcata Sunnybrae Tract - USA',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Improved Forest Management',
      weight: '710,093',
      description: 'Preservation of large tracts of coastal Redwood and Douglas fir that was slated for harvesting by the timber company.',
    },
    {
      name: 'Wolf Creek landfill - USA',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Landfill Methane Gas Capture',
      weight: '2,005,214',
      description: 'Landfill methane gas-to-energy facility that provides significant environmental benefits to the surrounding areas.',
    },
    {
      name: 'Terrapass Mixed Portfolio',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Mixed',
      weight: '241,967',
      description: 'Greenhouse gas reductions made at a variety of projects , including reforestation, methane capture and renewable energy.',
    },
    {
      name: 'gaston county landfill - USA',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Landfill Methane Gas Capture',
      weight: '721,663',
      description: 'Voluntary collection and destruction of landfill methane in two open flares and three internal combustion engine generators.',
    },
    {
      name: 'Myamyn conservation - australia',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Reforestation & Hydropower',
      weight: '995,908',
      description: 'Supporting biodiversity and reforestration in Victoria, Australia; alongwith carbon reduction from a hydropower plant in vietnam.',
      cost: 7.50
    },
    {
      name: 'natural pact land art - costa rica',
      img: 'assets/images/Tile_Image.jpg',
      title: 'Reforestation through Land Art',
      weight: '327',
      description: 'Unique \"land art\" reforestation and conservation of forest that extend an important biological corridor for many endangered species.',
    },
    {
      name: 'nature lab urban forestry - canada',
      img: 'assets/images/Tile_Image.jpg',
      title: 'urban Reforestation',
      weight: '13,033',
      description: 'Rehabilitation degraded urban and sub-urban area through reforestation, adding significant greenary and restoring biodiversity.',
      cost: 22.50
    }
  ]
}
