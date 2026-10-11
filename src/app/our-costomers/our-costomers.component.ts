import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-costomers',
  imports: [CommonModule],
  templateUrl: './our-costomers.component.html',
  styleUrl: './our-costomers.component.css'
})
export class OurCostomersComponent {
  showAll = false;

  customers = [
    {
      name: 'AFRIQIYAH Airways',
      logo: 'assets/Afriq.png'
    },
 
    {
      name: 'Air Algeria',
      logo: 'assets/AirAlgiri.png'
    },
    {
      name: 'Air Arabia Egypt',
      logo: 'assets/ARABIAeg.png'
    },
    {
      name: 'Air Arabia Morocco',
      logo: 'assets/airarabiaMaroc.png'
    },

    {
      name: 'Air Astana',
      logo: 'assets/AirAstana.png'
    },
    {
      name: 'Air Cairo',
      logo: 'assets/AirCairo.png'
    },
    {
      name: 'Air Explore',
      logo: 'assets/AirExplore.png'
    },
    {
      name: 'Air LUbo',
      logo: 'assets/AirLubo.png'
    },

    {
      name: 'Air Arabia',
      logo: 'assets/airArabia.png'
    },
    {
      name: 'Air Baltic',
      logo: 'assets/albastart.png'
    },
    {
      name: 'Alexandria Airlines',
      logo: 'assets/Alexandria_Airlines.png'
    },
    {
      name: 'ASL Airlines',
      logo: 'assets/ASLAirlinesFrance.png'
    },

    {
      name: 'Austrian Airlines',
      logo: 'assets/AustrianAirlines.png'
    },
    {
      name: 'Aviro Air',
      logo: 'assets/AviroAir.png'
    },
    {
      name: 'Azerbaijan Airlines',
      logo: 'assets/AzerbaijanAirlines.png'
    },
    {
      name: 'Badr Airlines',
      logo: 'assets/badrAirlines.png'
    },

    {
      name: 'Belavia',
      logo: 'assets/Belavia.png'
    },
    {
      name: 'BH Air',
      logo: 'assets/BHAir.png'
    },
    {
      name: 'Blue Panorama',
      logo: 'assets/BluePanorama.png'
    },
    {
      name: 'Bravo Airways',
      logo: 'assets/BravoAirways.png'
    },

    {
      name: 'Bulgaria Air',
      logo: 'assets/BulgariaAir.png'
    },
    {
      name: 'Cobrex Trans',
      logo: 'assets/Cobrex.png'
    },
    {
      name: 'Egypt Jet Aviation',
      logo: 'assets/EgyptJetAviation.png'
    },
    {
      name: 'EgyptAir',
      logo: 'assets/EGYPTAIRAirlines.png'
    },

    {
      name: 'EgyptAir Cargo',
      logo: 'assets/EGYPTAIRCARGO.png'
    },
    {
      name: 'Emirates',
      logo: 'assets/Emirates.png'
    },
    {
      name: 'Ethiopian Airlines',
      logo: 'assets/EthiopianAirways.png'
    },
    {
      name: 'Etihad Airways',
      logo: 'assets/EtihadAirways.png'
    },

    {
      name: 'Finnair',
      logo: 'assets/FINNAIR.png'
    },
    {
      name: 'FlyOne',
      logo: 'assets/flyone.png'
    },
    {
      name: 'FlyEgypt',
      logo: 'assets/FLY2SKY.png'
    },
    {
      name: 'Freebird Airlines',
      logo: 'assets/FreeBird.png'
    },

    {
      name: 'Galistar',
      logo: 'assets/Galistiar.png'
    },
    {
      name: 'GetJet',
      logo: 'assets/Getjet.png'
    },
    {
      name: 'Go2Sky',
      logo: 'assets/Go2Sky.png'
    },
    {
      name: 'Gulf Air',
      logo: 'assets/GulfAir.png'
    },

    {
      name: 'HiFly',
      logo: 'assets/Hifly.png'
    },
    {
      name: 'Holiday Europe',
      logo: 'assets/HOLIDAYEUROPE.png'
    },
    {
      name: 'Fly Airlines',
      logo: 'assets/iFlyAirline.png'
    },
    {
      name: 'Jazeera Airways',
      logo: 'assets/jazera.png'
    },

    {
      name: 'Jonika Airlines',
      logo: 'assets/JonikaAirline.png'
    },
    {
      name: 'KlasJet',
      logo: 'assets/Klasjetlogo.png'
    },
    {
      name: 'Korean Air',
      logo: 'assets/KOREANAIR.png'
    },
    {
      name: 'Libyan Airlines',
      logo: 'assets/LibyanAirlines.png'
    },

    {
      name: 'LOT Polish Airlines',
      logo: 'assets/LOT.png'
    },
    {
      name: 'MEA',
      logo: 'assets/mea.png'
    },
    {
      name: 'Neos',
      logo: 'assets/neos.png'
    },
    {
      name: 'Nesma Airlines',
      logo: 'assets/NESMAAirlines.png'
    },
     {
      name: 'Nile Airlines',
      logo: 'assets/nileair.png'
    },
     {
      name: 'Nova  Airlines',
      logo: 'assets/NovairLogo.png'
    },
     {
      name: 'Onura Airlines',
      logo: 'assets/Onurair.png'
    },
     {
      name: 'Orange2fly Airlines',
      logo: 'assets/Orange2fly.png'
    },
     {
      name: 'PrivilegeStyle Airlines',
      logo: 'assets/PrivilegeStyle.png'
    },
     {
      name: 'RahilaAir Airlines',
      logo: 'assets/RahilaAir.png'
    },
     {
      name: 'REDSEA Airlines',
      logo: 'assets/REDSEA.png'
    },
     {
      name: 'Rossiya Airlines',
      logo: 'assets/RossiyaAirlines.png'
    },
     {
      name: 'RoyalAirMoroco Airlines',
      logo: 'assets/RoyalAirMoroco.png'
    },
     {
      name: 'RoyalJordanian Airlines',
      logo: 'assets/RoyalJordanian.png'
    },
     {
      name: 'Salam Airlines',
      logo: 'assets/SalamAir.png'
    },
     {
      name: 'SAUDIA Airlines',
      logo: 'assets/SAUDIA.png'
    },
     {
      name: 'SaudiGulf Airlines',
      logo: 'assets/SaudiGulfAirlines.png'
    },
     {
      name: 'Skyup Airlines',
      logo: 'assets/Skyup.png'
    },
     {
      name: 'Somon Airlines',
      logo: 'assets/SomonAir.png'
    },
     {
      name: 'SUNEXPRESS Airlines',
      logo: 'assets/SUNEXPRESS.png'
    },
     {
      name: 'SundAir',
      logo: 'assets/SundAir.png'
    },
     {
      name: 'TAROM Airlines',
      logo: 'assets/TAROM.png'
    },
     {
      name: 'Tassili Airlines',
      logo: 'assets/Tassili.png'
    },
     {
      name: 'TitanAirways',
      logo: 'assets/TitanAirways.png'
    },
     {
      name: 'Turkish Airlines',
      logo: 'assets/TurkishAirlines.png'
    },
     {
      name: 'UralLogo Airlines',
      logo: 'assets/UralLogo.png'
    },
     {
      name: 'Uzbekistan Airlines',
      logo: 'assets/UzbekistanAirways.png'
    }
  ];

  get visibleCustomers() {
    return this.showAll
      ? this.customers
      : this.customers.slice(0, 12);
  }

  toggleCustomers() {
    this.showAll = !this.showAll;
  }
}
