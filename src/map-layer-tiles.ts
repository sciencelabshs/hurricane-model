export interface MapTileLayer {
  mapType: string;
  name: string;
  url: string;
  attribution: string;
  maxZoom: number;
  subdomains: string[];
}

export type MapTilesName = "satellite" | "street" | "relief" | "population" | "stormSurge";

const layerInfo: MapTileLayer[] = [
  {
    mapType: "satellite",
    name: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    // tslint:disable-next-line:max-line-length
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    maxZoom: 13,
    subdomains: []
  },
  {
    mapType: "street",
    name: "Street",
    // Switch from wikimedia to arcgisonline for street map tiles due to new terms of use
    // url: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png",
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    // tslint:disable-next-line:max-line-length
    // attribution: 'Street map images are hosted by <a href="https://foundation.wikimedia.org/w/index.php?title=Maps_Terms_of_Use#Where_does_the_map_data_come_from.3F" target="_blank">The Wikimedia Foundation</a>, serving map data from <a href="https://openstreetmap.org" target="_blank">&#169;OpenStreetMap</a>',
     // tslint:disable-next-line:max-line-length
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    maxZoom: 13,
    subdomains: []
  },
  {
    mapType: "relief",
    name: "Relief",
    // tslint:disable-next-line:max-line-length
    url: "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/ETOPO1_Global_Relief_Model_Color_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
    // tslint:disable-next-line:max-line-length
    attribution: "NOAA National Centers for Environmental Information (NCEI), https://noaa.maps.arcgis.com/home/item.html?id=c7cdc62ec1d44297becf264bf67449f9",
    maxZoom: 7,
    subdomains: []
  },
  {
    // Note: As of 2021-Oct, this url is no longer in service. We have configured the model not to display
    // the population map option (config.enablePopulationMap: false) until a replacement is found.
    mapType: "population",
    name: "Population",
    // tslint:disable-next-line:max-line-length
    url: "https://tiles.arcgis.com/tiles/4yjifSiIG17X0gW4/arcgis/rest/services/World_Population_Footprint/MapServer/tile/{z}/{y}/{x}",
    // tslint:disable-next-line:max-line-length
    attribution: "Esri, U.S. Census Bureau, https://www.arcgis.com/home/item.html?id=302d4e6025ef41fa8d3525b7fc31963a",
    maxZoom: 13,
    subdomains: []
  },
  {
    // https://www.nhc.noaa.gov/nationalsurge/
    // https://experience.arcgis.com/experience/203f772571cb48b1b8b50fdcc3272e2c
    mapType: "stormSurge",
    name: "Storm Surge",
    // tslint:disable-next-line:max-line-length
    url: "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/Storm_Surge_HazardMaps_Category{hurricaneCat}_v3/MapServer/tile/{z}/{y}/{x}",
    // tslint:disable-next-line:max-line-length
    attribution: "Zachry, B. C., W. J. Booth, J. R. Rhome, and T. M. Sharon, 2015: A National View of Storm Surge Risk and Inundation. Weather, Climate, and Society, 7(2), 109–117. DOI: http://dx.doi.org/10.1175/WCAS–D–14–00049.1, https://www.nhc.noaa.gov/nationalsurge/",
    maxZoom: 13,
    subdomains: []
  }
];

export const mapTilesNames = layerInfo.map(li => li.mapType);

export function mapLayer(layerType: MapTilesName): MapTileLayer {
  return layerInfo.find(m => m.mapType === layerType) || layerInfo[0];
}
