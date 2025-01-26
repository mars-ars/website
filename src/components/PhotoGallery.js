import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function PhotoGallery(props) {
  const photoList = (photos[props?.event ?? 'event00x'] ?? []);
  if (photoList.length < 1) {
    return <></>;
  }

  return (
    <Box sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photoList.map((item) => (
          <ImageListItem key={item}>
            <ImgixImage src={item}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const photos = {
  "event001": [],
  "event002": ["event002/6u1a2355-cr2_dxo_deepprime_53311706139_o.jpg", "event002/6u1a2348_53310069861_o.jpg", "event002/6u1a2349-cr2_dxo_deepprime_53310318773_o.jpg", "event002/6u1a2350-cr2_dxo_deepprime_53310069846_o.jpg", "event002/6u1a2353_53310318753_o.jpg", "event002/6u1a2354-cr2_dxo_deepprime_53310428024_o.jpg", "event002/6u1a2356-cr2_dxo_deepprime_53311591943_o.jpg", "event002/6u1a2357-cr2_dxo_deepprime_53310479467_o.jpg", "event002/6u1a2358-cr2_dxo_deepprime_53311346461_o.jpg", "event002/6u1a2359-cr2_dxo_deepprime_53311821830_o.jpg", "event002/6u1a2360-cr2_dxo_deepprime_53311346941_o.jpg", "event002/6u1a2363-cr2_dxo_deepprime_53311822130_o.jpg", "event002/6u1a2364-cr2_dxo_deepprime_53310480362_o.jpg", "event002/6u1a2366_53313684470_o.jpg", "event002/6u1a2367_53313455998_o.jpg", "event002/6u1a2370_53313456148_o.jpg", "event002/6u1a2385_53340297339_o.jpg", "event002/6u1a2396_53340421725_o.jpg", "event002/6u1a2778_53965705650_o.jpg", "event002/6u1a2780_53965705465_o.jpg", "event002/6u1a2781_53965583959_o.jpg", "event002/6u1a2782_53965584089_o.jpg", "event002/6u1a2783_53965584124_o.jpg", "event002/6u1a2784_53964366352_o.jpg", "event002/6u1a2785_53964366337_o.jpg", "event002/6u1a2786_53965584039_o.jpg", "event002/6u1a2788_53964366332_o.jpg", "event002/6u1a2789_53965583989_o.jpg", "event002/6u1a2792_53965583929_o.jpg", "event002/6u1a2795_53965251421_o.jpg"],
  "event003": ["event003/PSK_6042.jpg", "event003/PSK_6045.jpg", "event003/PSK_6049.jpg", "event003/PSK_6051.jpg", "event003/PSK_6052.jpg", "event003/PSK_6053.jpg", "event003/PSK_6055.jpg", "event003/PSK_6056.jpg", "event003/PSK_6058.jpg", "event003/PSK_6059.jpg", "event003/PSK_6062.jpg", "event003/PSK_6066.jpg", "event003/PSK_6067.jpg", "event003/PSK_6169.jpg", "event003/PSK_6188.jpg", "event003/PSK_6190.jpg", "event003/PSK_6192.jpg", "event003/Screenshot2025-01-19at11-59-35AM.png", "event003/Screenshot2025-01-19at12-00-00PM.png", "event003/Screenshot2025-01-19at12-00-27PM.png"],
  "event004": ["event004/6u1a2431_53478581049_o.jpg", "event004/6u1a2401_53478192428_o.jpg", "event004/6u1a2402_53478365514_o.jpg", "event004/6u1a2403_53478050621_o.jpg", "event004/6u1a2404_53478192783_o.jpg", "event004/6u1a2405_53478365894_o.jpg", "event004/6u1a2407_53478193708_o.jpg", "event004/6u1a2408_53477145992_o.jpg", "event004/6u1a2409_53478366654_o.jpg", "event004/6u1a2411_53478460850_o.jpg", "event004/6u1a2432_53478676385_o.jpg"],
  "event005": ["event005/s2-01-6u1a2547_53522785262_o.jpg", "event005/02-6u1a2522_53523997314_o.jpg", "event005/03-6u1a2523_53524110540_o.jpg", "event005/s2-02-6u1a2548_53523856683_o.jpg", "event005/s2-04-6u1a2550_53523680586_o.jpg", "event005/s2-06-6u1a2554_53523998209_o.jpg", "event005/s2-07-6u1a2562_53523856563_o.jpg", "event005/s2-09-6u1a2566_53523680581_o.jpg", "event005/s2-10-6u1a2569_53523680736_o.jpg", "event005/s3-01-6u1a2572_53522786647_o.jpg", "event005/s3-02-6u1a2575_53524112990_o.jpg", "event005/s3-03-6u1a2577_53524113035_o.jpg", "event005/s3-04-6u1a2579_53523999934_o.jpg", "event005/s3-08-6u1a2589_53524000014_o.jpg", "event005/s3-09-6u1a2591_53524113090_o.jpg"],
  "event006": ["event006/6u1a2662_53593443936_o.jpg", "event006/6u1a265_53593764334_o.jpg", "event006/6u1a2653_53595783388_o.jpg", "event006/6u1a2655_53592571912_o.jpg", "event006/6u1a2656_53593444026_o.jpg", "event006/6u1a2657_53593891615_o.jpg", "event006/6u1a2659_53593891565_o.jpg", "event006/6u1a2661_53593649268_o.jpg", "event006/6u1a2663_53593443926_o.jpg", "event006/6u1a2664_53592571767_o.jpg", "event006/6u1a2666_53592571622_o.jpg", "event006/6u1a2667_53593891450_o.jpg", "event006/6u1a2670_53592571602_o.jpg", "event006/6u1a2672_53593443771_o.jpg", "event006/6u1a2674_53593764004_o.jpg"],
  "event007": ["event007/6u1a2755_53763671864_o.jpg", "event007/6u1a2741_53762434062_o.jpg", "event007/6u1a2743_53763669684_o.jpg", "event007/6u1a2745_53763755275_o.jpg", "event007/6u1a2746_53763589653_o.jpg", "event007/6u1a2751_53763818910_o.jpg", "event007/6u1a2752_53762437437_o.jpg", "event007/6u1a2756_53763338906_o.jpg", "event007/6u1a2756a_53763620623_o.jpg", "event007/6u1a2757_53763339106_o.jpg", "event007/6u1a2758_53763339296_o.jpg", "event007/6u1a2758-2_53762520127_o.jpg", "event007/6u1a2759_53763674399_o.jpg"],
  "event008": ["event008/IMG_20240622_113737.jpg", "event008/IMG_20240622_113708.jpg", "event008/IMG_20240622_113715.jpg", "event008/IMG_20240622_113738.jpg", "event008/IMG_20240622_114218.jpg", "event008/IMG_20240622_114308.jpg", "event008/IMG_20240622_114326.jpg", "event008/IMG_20240622_114418.jpg", "event008/IMG_20240622_114421.jpg", "event008/IMG_20240622_115333.jpg", "event008/IMG_20240622_115346.jpg", "event008/IMG_20240622_115732.jpg", "event008/IMG_20240622_115743.jpg"],
  "event009": [],
  "event010": ["event010/6u1a2791_53964366282_o.jpg", "event010/6u1a2778_53965705650_o.jpg", "event010/6u1a2780_53965705465_o.jpg", "event010/6u1a2781_53965583959_o.jpg", "event010/6u1a2782_53965584089_o.jpg", "event010/6u1a2783_53965584124_o.jpg", "event010/6u1a2784_53964366352_o.jpg", "event010/6u1a2785_53964366337_o.jpg", "event010/6u1a2786_53965584039_o.jpg", "event010/6u1a2788_53964366332_o.jpg", "event010/6u1a2789_53965583989_o.jpg", "event010/6u1a2792_53965583929_o.jpg", "event010/6u1a2795_53965251421_o.jpg", "event010/6u1a2799_53964520377_o.jpg", "event010/6u1a2800_53965405541_o.jpg"],
  "event011": ["event011/6u1a2821_54030324188_o.jpg", "event011/6u1a2810-_54030397809_o.jpg", "event011/6u1a2811-_54029190797_o.jpg", "event011/6u1a2812-_54030520135_o.jpg", "event011/6u1a2814_54030066236_o.jpg", "event011/6u1a2815_54029192037_o.jpg", "event011/6u1a2816_54030521480_o.jpg", "event011/6u1a2817_54030069806_o.jpg", "event011/6u1a2818_54029197442_o.jpg", "event011/6u1a2819_54030323178_o.jpg", "event011/6u1a2823_54030325108_o.jpg", "event011/6u1a2824_54030407109_o.jpg", "event011/6u1a2825_54030075856_o.jpg", "event011/6u1a2827_54030077701_o.jpg", "event011/6u1a2828_54030533015_o.jpg", "event011/6u1a2829_54029204827_o.jpg", "event011/6u1a2831_54030412319_o.jpg", "event011/6u1a2837_54030334023_o.jpg"],
  "event012": ["event012/IMG-20250114-WA0014.jpg", "event012/IMG-20250114-WA0009.jpg", "event012/IMG-20250114-WA0010.jpg", "event012/IMG-20250114-WA0011.jpg", "event012/IMG-20250114-WA0013.jpg", "event012/IMG-20250114-WA0016.jpg"],
  "event013": ["event013/20241229_101208.jpg", "event013/20241229_095416.jpg", "event013/20241229_100513.jpg", "event013/20241229_101130.jpg", "event013/20241229_101258.jpg", "event013/20241229_105508.jpg", "event013/20241229_113050.jpg", "event013/20241229_124031.jpg", "event013/Screenshot2025-01-19-at-11-40-13AM.png", "event013/Screenshot2025-01-19at11-40-47AM.png", "event013/Screenshot2025-01-19at11-41-25AM.png", "event013/Screenshot2025-01-19at11-41-32AM.png"],
  "event014": ["event014/6u1a4357_54260992637_o.jpg", "event014/6u1a4356_54262118854_o.jpg", "event014/6u1a4361_54260992607_o.jpg", "event014/6u1a4362_54262305170_o.jpg", "event014/6u1a4366_54260994222_o.jpg", "event014/6u1a4375_54262307850_o.jpg", "event014/6u1a4377_54261888301_o.jpg", "event014/6u1a4378_54262121874_o.jpg", "event014/6u1a4379_54262110633_o.jpg", "event014/6u1a4384_54262110458_o.jpg", "event014/6u1a4385_54260995457_o.jpg", "event014/6u1a4387_54260995502_o.jpg", "event014/6u1a4388_54262121684_o.jpg", "event014/6u1a4394_54262311315_o.jpg", "event014/IMG_20250104_093500582_HDR.jpg", "event014/IMG-20250112-WA0007.jpg", "event014/IMG-20250112-WA0015.jpg", "event014/IMG-20250112-WA0016.jpg", "event014/IMG-20250112-WA0019.jpg", "event014/IMG-20250112-WA0024.jpg", "event014/IMG-20250112-WA0026.jpg", "event014/IMG-20250112-WA0027.jpg", "event014/IMG-20250112-WA0033.jpg", "event014/IMG-20250112-WA0034.jpg", "event014/IMG-20250118-WA0017.jpg", "event014/IMG-20250118-WA0022.jpg", "event014/IMG-20250118-WA0027.jpg", "event014/IMG-20250118-WA0029.jpg"],
  "event015": [],
};

const ImgixImage = ({ src }) => {
  const baseUrl = "https://mars-ars.imgix.net";

  return (
    <a href={`${baseUrl}/${src}`} download>
      <img
        srcSet={`
          ${baseUrl}/${src}?w=100&fit=crop&auto=format 100w,
          ${baseUrl}/${src}?w=200&fit=crop&auto=format 200w,
          ${baseUrl}/${src}?w=400&fit=crop&auto=format 400w,
          ${baseUrl}/${src}?w=800&fit=crop&auto=format 800w,
          ${baseUrl}/${src}?w=1200&fit=crop&auto=format 1200w,
          ${baseUrl}/${src}?w=1600&fit=crop&auto=format 1600w
        `}
        sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 800px"
        loading="lazy"
      />
    </a>
  );
};