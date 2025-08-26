var codeToCurrent = {
    400: { iconFile: 'Ts', textModifier: 'Thunderstorm', narration: '400' },
    401: { iconFile: 'Ts', textModifier: 'Light Rain with Thunder', narration: '400' },
    402: { iconFile: 'Ts', textModifier: 'Heavy Thunderstorm', narration: '402' },
    422: { iconFile: 'Ts', textModifier: 'Thunderstorm', narration: '400' },
    429: { iconFile: 'Ts', textModifier: 'Thunderstorm', narration: '400' },
    470: { iconFile: 'Ts', textModifier: 'Thunderstorm / Windy / Fog', narration: '400' },
    471: { iconFile: 'Ts', textModifier: 'Light Rain with Thunder', narration: '400' },
    472: { iconFile: 'Ts', textModifier: 'Heavy Thunderstorm / Fog', narration: '402' },
    480: { iconFile: 'Ts', textModifier: 'Thunderstorm / Fog', narration: '400' },
    481: { iconFile: 'Ts', textModifier: 'Light Rain with Thunder', narration: '400' },
    482: { iconFile: 'Ts', textModifier: 'Heavy Thunderstorm / Fog', narration: '402' },
    490: { iconFile: 'Ts', textModifier: 'Thunderstorm / Windy', narration: '400' },
    491: { iconFile: 'Ts', textModifier: 'Light Rain with Thunder', narration: '400' },
    492: { iconFile: 'Ts', textModifier: 'Heavy Thunderstorm / Windy', narration: '402' },
    500: { iconFile: 'RaSn', textModifier: 'Rain and Snow', narration: '500' },
    570: { iconFile: 'RaSn', textModifier: 'Rain and Snow / Windy / Fog', narration: '500' },
    580: { iconFile: 'RaSn', textModifier: 'Rain and Snow / Fog', narration: '500' },
    590: { iconFile: 'RaSn', textModifier: 'Rain and Snow / Windy', narration: '500' },
    600: { iconFile: 'RaSlt', textModifier: 'Rain and Sleet', narration: '600' },
    610: { iconFile: 'SltFrzRa', textModifier: 'Sleet and Freezing Rain', narration: '610' },
    640: { iconFile: 'SltFrzRa', textModifier: 'Sleet / Freezing Rain / Windy', narration: '610' },
    650: { iconFile: 'RaSlt', textModifier: 'Rain and Sleet / Windy / Fog', narration: '600' },
    660: { iconFile: 'SltFrzRa', textModifier: 'Sleet / Freezing Rain / Fog', narration: '600' },
    670: { iconFile: 'RaSlt', textModifier: 'Rain and Sleet / Fog', narration: '600' },
    680: { iconFile: 'SltFrzRa', textModifier: 'Sleet / Freezing Rain / Windy', narration: '610' },
    690: { iconFile: 'RaSlt', textModifier: 'Rain and Sleet / Windy', narration: '600' },
    700: { iconFile: 'SnSlt', textModifier: 'Snow and Sleet', narration: '700' },
    701: { iconFile: 'LtSnSlt', textModifier: 'Light Snow and Sleet', narration: '700' },
    705: { iconFile: 'SnSlt', textModifier: 'Snow and Sleet / Windy', narration: '700' },
    706: { iconFile: 'LtSnSlt', textModifier: 'Light Snow and Sleet / Windy', narration: '700' },
    710: { iconFile: 'SnFrzRa', textModifier: 'Snow/ Freezing Rain', narration: '710' },
    711: { iconFile: 'LtSnFrzRa', textModifier: 'Light Snow/ Freezing Rain', narration: '711' },
    715: { iconFile: 'SnFrzRa', textModifier: 'Snow/ Freezing Rain/ Windy', narration: '710' },
    716: { iconFile: 'LtSnFrzRa', textModifier: 'Light Snow/ Freezing Rain', narration: '711' },
    720: { iconFile: 'Mix', textModifier: 'Wintry Mix', narration: '720' },
    725: { iconFile: 'Mix', textModifier: 'Wintry Mix/ Windy', narration: '720' },
    730: { iconFile: 'TsMix', textModifier: 'Thunder/ Wintry Mix', narration: '730' },
    735: { iconFile: 'TsMix', textModifier: 'Thunder/ Wintry Mix/ Windy', narration: '730' },
    750: { iconFile: 'SnSlt', textModifier: 'Snow and Sleet/ Fog', narration: '700' },
    751: { iconFile: 'LtSnSlt', textModifier: 'Light Snow and Sleet/ Fog', narration: '700' },
    755: { iconFile: 'SnSlt', textModifier: 'Snow and Sleet/ Windy/ Fog', narration: '700' },
    756: { iconFile: 'LtSnSlt', textModifier: 'Light Snow and Sleet/ Fog', narration: '700' },
    760: { iconFile: 'SnFrzRa', textModifier: 'Snow/ Freezing Rain/ Fog', narration: '700' },
    761: { iconFile: 'LtSnFrzRa', textModifier: 'Light Snow/ Freezing Rain', narration: '711' },
    765: { iconFile: 'SnFrzRa', textModifier: 'Snow/ Freezing Rain/ Windy', narration: '710' },
    766: { iconFile: 'LtSnFrzRa', textModifier: 'Light Snow/ Freezing Rain', narration: '711' },
    770: { iconFile: 'Mix', textModifier: 'Wintry Mix/ Fog', narration: '720' },
    775: { iconFile: 'Mix', textModifier: 'Wintry Mix/ Windy/ Fog', narration: '720' },
    780: { iconFile: 'TsMix', textModifier: 'Thunder/ Wintry Mix/ Fog', narration: '730' },
    785: { iconFile: 'TsMix', textModifier: 'Thunder/ Wintry Mix/ Windy', narration: '730' },
    800: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle', narration: '800' },
    801: { iconFile: 'FrzDrz', textModifier: 'Light Freezing Drizzle', narration: '801' },
    802: { iconFile: 'FrzDrz', textModifier: 'Heavy Freezing Drizzle', narration: '800' },
    810: { iconFile: 'FrzDrz', textModifier: 'Drizzle/ Freezing Drizzle', narration: '801' },
    815: { iconFile: 'FrzDrz', textModifier: 'Drizzle/ Freezing Drizzle', narration: '801' },
    820: { iconFile: 'FrzDrz', textModifier: 'Drizzle/ Freezing Drizzle', narration: '801' },
    825: { iconFile: 'FrzDrz', textModifier: 'Drizzle/ Freezing Drizzle', narration: '801' },
    870: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle/ Fog', narration: '800' },
    871: { iconFile: 'FrzDrz', textModifier: 'Light Freezing Drizzle/ Fog', narration: '801' },
    872: { iconFile: 'FrzDrz', textModifier: 'Heavy Freezing Drizzle/ Fog', narration: '800' },
    880: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle/ Windy/ Fog', narration: '800' },
    881: { iconFile: 'FrzDrz', textModifier: 'Light Freezing Drizzle/ Fog', narration: '800' },
    882: { iconFile: 'FrzDrz', textModifier: 'Heavy Freezing Drizzle/ Fog', narration: '800' },
    890: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle/ Windy', narration: '800' },
    891: { iconFile: 'FrzDrz', textModifier: 'Light Freezing Drizzle', narration: '801' },
    892: { iconFile: 'FrzDrz', textModifier: 'Heavy Freezing Drizzle', narration: '800' },
    900: { iconFile: 'Drz', textModifier: 'Drizzle' },
    901: { iconFile: 'Drz', textModifier: 'Light Drizzle' },
    902: { iconFile: 'Drz', textModifier: 'Heavy Drizzle' },
    910: { iconFile: 'DrzFog', textModifier: 'Drizzle and Fog' },
    980: { iconFile: 'DrzFog', textModifier: 'Drizzle and Fog/ Windy' },
    990: { iconFile: 'Drz', textModifier: 'Drizzle/Windy' },
    991: { iconFile: 'Drz', textModifier: 'Light Drizzle/ Windy' },
    992: { iconFile: 'Drz', textModifier: 'Heavy Drizzle/ Windy' },
    1000: { iconFile: 'FrzRa', textModifier: 'Freezing Rain' },
    1001: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain' },
    1002: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain' },
    1010: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain' },
    1040: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Windy' },
    1050: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Windy' },
    1060: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Fog' },
    1070: { iconFile: 'FrzRa', textModifier: 'Freezing Rain/ Fog' },
    1071: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain/ Fog' },
    1072: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain/ Fog' },
    1080: { iconFile: 'FrzRa', textModifier: 'Freezing Rain/ Windy/ Fog' },
    1081: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain/ Fog' },
    1082: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain/ Fog' },
    1090: { iconFile: 'FrzRa', textModifier: 'Freezing Rain/ Windy' },
    1091: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain/ Windy' },
    1092: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain/ Windy' },
    1100: { iconFile: 'LtRa', textModifier: 'Rain Shower' },
    1101: { iconFile: 'LtRa', textModifier: 'Light Rain Shower' },
    1102: { iconFile: 'Ra', textModifier: 'Heavy Rain Shower' },
    1170: { iconFile: 'LtRa', textModifier: 'Rain Shower/ Windy/ Fog' },
    1171: { iconFile: 'LtRa', textModifier: 'Light Rain Shower/ Windy' },
    1172: { iconFile: 'WndRa', textModifier: 'Heavy Rain Shower/ Windy' },
    1180: { iconFile: 'LtRa', textModifier: 'Rain Shower/ Fog' },
    1181: { iconFile: 'LtRa', textModifier: 'Light Rain Shower/ Fog' },
    1182: { iconFile: 'Ra', textModifier: 'Heavy Rain Shower/ Fog' },
    1190: { iconFile: 'LtRa', textModifier: 'Rain Shower/ Windy' },
    1191: { iconFile: 'LtRa', textModifier: 'Light Rain Shower/ Windy' },
    1192: { iconFile: 'WndRa', textModifier: 'Heavy Rain Shower/ Windy' },
    1200: { iconFile: 'Ra', textModifier: 'Rain' },
    1201: { iconFile: 'LtRa', textModifier: 'Light Rain' },
    1202: { iconFile: 'HvyRa', textModifier: 'Heavy Rain' },
    1210: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain/ Sleet' },
    1211: { iconFile: 'SltFrzRa', textModifier: 'Light Freezing Rain/ Sleet' },
    1212: { iconFile: 'SltFrzRa', textModifier: 'Heavy Freezing Rain/ Sleet' },
    1215: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain/ Sleet/ Fog' },
    1216: { iconFile: 'SltFrzRa', textModifier: 'Light Freezing Rain/ Sleet' },
    1217: { iconFile: 'SltFrzRa', textModifier: 'Heavy Freezing Rain/ Sleet' },
    1220: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain/ Sleet/ Windy' },
    1221: { iconFile: 'SltFrzRa', textModifier: 'Light Freezing Rain/ Sleet' },
    1222: { iconFile: 'SltFrzRa', textModifier: 'Heavy Freezing Rain/ Sleet' },
    1225: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain/ Sleet/ Windy' },
    1226: { iconFile: 'SltFrzRa', textModifier: 'Light Freezing Rain/ Sleet' },
    1227: { iconFile: 'SltFrzRa', textModifier: 'Heavy Freezing Rain/ Sleet' },
    1230: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain' },
    1231: { iconFile: 'RaFrzRa', textModifier: 'Light Rain/ Freezing Rain' },
    1232: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain/ Freezing Rain' },
    1235: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Fog' },
    1236: { iconFile: 'RaFrzRa', textModifier: 'Light Rain/ Freezing Rain' },
    1237: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain/ Freezing Rain' },
    1240: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Windy' },
    1241: { iconFile: 'RaFrzRa', textModifier: 'Light Rain/ Freezing Rain' },
    1242: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain/ Freezing Rain' },
    1245: { iconFile: 'RaFrzRa', textModifier: 'Rain/ Freezing Rain/ Windy' },
    1246: { iconFile: 'RaFrzRa', textModifier: 'Light Rain/ Freezing Rain' },
    1247: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain/ Freezing Rain' },
    1270: { iconFile: 'WndRa', textModifier: 'Rain/Windy/Fog' },
    1271: { iconFile: 'LtRa', textModifier: 'Light Rain/ Windy/ Fog' },
    1272: { iconFile: 'WndRa', textModifier: 'Heavy Rain/ Windy/ Fog' },
    1280: { iconFile: 'Ra', textModifier: 'Rain/Fog' },
    1281: { iconFile: 'LtRa', textModifier: 'Light Rain/Fog' },
    1282: { iconFile: 'HvyRa', textModifier: 'Heavy Rain/Fog' },
    1290: { iconFile: 'WndRa', textModifier: 'Rain/Windy' },
    1291: { iconFile: 'LtRa', textModifier: 'Light Rain/Windy' },
    1292: { iconFile: 'WndRa', textModifier: 'Heavy Rain/ Windy' },
    1310: { iconFile: 'SnFl', textModifier: 'Snow Grains' },
    1311: { iconFile: 'SnFl', textModifier: 'Light Snow Grains' },
    1312: { iconFile: 'LtSn', textModifier: 'Heavy Snow Grains' },
    1370: { iconFile: 'SnFl', textModifier: 'Snow Grains/ Windy/ Fog' },
    1371: { iconFile: 'SnFl', textModifier: 'Light Snow Grains/ Windy' },
    1372: { iconFile: 'LtSn', textModifier: 'Heavy Snow Grains/ Windy' },
    1380: { iconFile: 'SnFl', textModifier: 'Snow Grains/Fog' },
    1381: { iconFile: 'SnFl', textModifier: 'Light Snow Grains/ Fog' },
    1382: { iconFile: 'LtSn', textModifier: 'Heavy Snow Grains/ Fog' },
    1390: { iconFile: 'SnFl', textModifier: 'Snow Grains/ Windy' },
    1391: { iconFile: 'SnFl', textModifier: 'Light Snow Grains/ Windy' },
    1392: { iconFile: 'LtSn', textModifier: 'Heavy Snow Grains/ Windy' },
    1400: { iconFile: 'LtSn', textModifier: 'Snow Shower' },
    1401: { iconFile: 'SnFl', textModifier: 'Light Snow Shower' },
    1402: { iconFile: 'Sn', textModifier: 'Heavy Snow Shower' },
    1470: { iconFile: 'LtSn', textModifier: 'Snow Shower/ Windy/ Fog' },
    1471: { iconFile: 'SnFl', textModifier: 'Light Snow Shower/ Windy' },
    1472: { iconFile: 'WndSn', textModifier: 'Heavy Snow Shower/ Windy' },
    1480: { iconFile: 'LtSn', textModifier: 'Snow Shower/ Fog' },
    1481: { iconFile: 'SnFl', textModifier: 'Light Snow Shower/ Fog' },
    1482: { iconFile: 'Sn', textModifier: 'Heavy Snow Shower/ Fog' },
    1490: { iconFile: 'LtSn', textModifier: 'Snow Shower/ Windy' },
    1491: { iconFile: 'SnFl', textModifier: 'Light Snow Shower/ Windy' },
    1492: { iconFile: 'WndSn', textModifier: 'Heavy Snow Shower/ Windy' },
    1500: { iconFile: 'BlowSn', textModifier: 'Blowing Snow' },
    1501: { iconFile: 'BlowSn', textModifier: 'Drifting Snow' },
    1509: { iconFile: 'BlowSn', textModifier: 'Blowing Snow Nearby' },
    1570: { iconFile: 'BlowSn', textModifier: 'Blowing Snow/ Windy/ Fog' },
    1571: { iconFile: 'BlowSn', textModifier: 'Drifting Snow/ Windy/ Fog' },
    1579: { iconFile: 'BlowSn', textModifier: 'Blowing Snow Nearby/ Windy' },
    1580: { iconFile: 'BlowSn', textModifier: 'Blowing Snow/ Fog' },
    1581: { iconFile: 'BlowSn', textModifier: 'Drifting Snow/ Fog' },
    1589: { iconFile: 'BlowSn', textModifier: 'Blowing Snow Nearby/ Fog' },
    1590: { iconFile: 'BlowSn', textModifier: 'Blowing Snow/ Windy' },
    1591: { iconFile: 'BlowSn', textModifier: 'Drifting Snow/ Windy' },
    1599: { iconFile: 'BlowSn', textModifier: 'Blowing Snow Nearby/ Windy' },
    1600: { iconFile: 'Sn', textModifier: 'Snow' },
    1601: { iconFile: 'LtSn', textModifier: 'Light Snow' },
    1602: { iconFile: 'HvySn', textModifier: 'Heavy Snow' },
    1630: { iconFile: 'TsSn', textModifier: 'Snow and Thunder/ Windy/ Fog' },
    1631: { iconFile: 'TsSn', textModifier: 'Light Snow with Thunder' },
    1632: { iconFile: 'TsSn', textModifier: 'Heavy Snow with Thunder' },
    1640: { iconFile: 'TsSn', textModifier: 'Snow and Thunder' },
    1641: { iconFile: 'TsSn', textModifier: 'Light Snow with Thunder' },
    1642: { iconFile: 'TsSn', textModifier: 'Heavy Snow with Thunder' },
    1650: { iconFile: 'TsSn', textModifier: 'Snow and Thunder/ Windy' },
    1651: { iconFile: 'TsSn', textModifier: 'Light Snow with Thunder' },
    1652: { iconFile: 'TsSn', textModifier: 'Heavy Snow with Thunder' },
    1660: { iconFile: 'TsSn', textModifier: 'Snow and Thunder/ Fog' },
    1661: { iconFile: 'TsSn', textModifier: 'Light Snow with Thunder' },
    1662: { iconFile: 'TsSn', textModifier: 'Heavy Snow with Thunder' },
    1670: { iconFile: 'Sn', textModifier: 'Snow/Fog' },
    1671: { iconFile: 'LtSn', textModifier: 'Light Snow/Fog' },
    1672: { iconFile: 'HvySn', textModifier: 'Heavy Snow/Fog' },
    1680: { iconFile: 'WndSn', textModifier: 'Snow/Windy/Fog' },
    1681: { iconFile: 'LtSn', textModifier: 'Light Snow/ Windy/ Fog' },
    1682: { iconFile: 'WndSn', textModifier: 'Heavy Snow/ Windy/ Fog' },
    1690: { iconFile: 'WndSn', textModifier: 'Snow/Windy' },
    1691: { iconFile: 'LtSn', textModifier: 'Light Snow/ Windy' },
    1692: { iconFile: 'WndSn', textModifier: 'Heavy Snow/ Windy' },
    1700: { iconFile: 'Ts', textModifier: 'Hail' },
    1701: { iconFile: 'Ts', textModifier: 'Small Hail' },
    1730: { iconFile: 'Ts', textModifier: 'Thunder and Hail/ Windy' },
    1731: { iconFile: 'Ts', textModifier: 'Thunder and Small Hail' },
    1740: { iconFile: 'Ts', textModifier: 'Thunder and Hail' },
    1741: { iconFile: 'Ts', textModifier: 'Thunder and Small Hail' },
    1750: { iconFile: 'Ts', textModifier: 'Thunder and Hail/ Windy/ Fog' },
    1751: { iconFile: 'Ts', textModifier: 'Thunder and Small Hail/ Fog' },
    1760: { iconFile: 'Ts', textModifier: 'Thunder and Hail/ Fog' },
    1761: { iconFile: 'Ts', textModifier: 'Thunder and Small Hail/ Fog' },
    1770: { iconFile: 'Ts', textModifier: 'Hail/Fog' },
    1771: { iconFile: 'Ts', textModifier: 'Small Hail/Fog' },
    1780: { iconFile: 'Ts', textModifier: 'Hail/Windy/Fog' },
    1781: { iconFile: 'Ts', textModifier: 'Small Hail/ Windy/ Fog' },
    1790: { iconFile: 'Ts', textModifier: 'Hail/Windy' },
    1791: { iconFile: 'Ts', textModifier: 'Small Hail/Windy' },
    1800: { iconFile: 'Slt', textModifier: 'Sleet' },
    1801: { iconFile: 'Slt', textModifier: 'Light Sleet' },
    1802: { iconFile: 'Slt', textModifier: 'Heavy Sleet' },
    1810: { iconFile: 'Slt', textModifier: 'Snow Pellets' },
    1811: { iconFile: 'TsSlt', textModifier: 'Thunder and Snow Pellets' },
    1816: { iconFile: 'TsSlt', textModifier: 'Thunder and Snow Pellets' },
    1821: { iconFile: 'TsSlt', textModifier: 'Thunder and Snow Pellets' },
    1826: { iconFile: 'TsSlt', textModifier: 'Thunder and Snow Pellets' },
    1830: { iconFile: 'TsSlt', textModifier: 'Sleet and Thunder/ Fog' },
    1831: { iconFile: 'TsSlt', textModifier: 'Light Sleet and Thunder' },
    1832: { iconFile: 'TsSlt', textModifier: 'Heavy Sleet and Thunder' },
    1840: { iconFile: 'TsSlt', textModifier: 'Sleet and Thunder' },
    1841: { iconFile: 'TsSlt', textModifier: 'Light Sleet and Thunder' },
    1842: { iconFile: 'TsSlt', textModifier: 'Heavy Sleet and Thunder' },
    1850: { iconFile: 'Slt', textModifier: 'Sleet/Fog' },
    1851: { iconFile: 'Slt', textModifier: 'Light Sleet/Fog' },
    1852: { iconFile: 'Slt', textModifier: 'Heavy Sleet/Fog' },
    1860: { iconFile: 'Slt', textModifier: 'Snow Pellets/ Fog' },
    1861: { iconFile: 'Slt', textModifier: 'Snow Pellets/ Windy/ Fog' },
    1870: { iconFile: 'Slt', textModifier: 'Snow Pellets/ Windy' },
    1880: { iconFile: 'TsSlt', textModifier: 'Sleet and Thunder/ Windy' },
    1881: { iconFile: 'TsSlt', textModifier: 'Light Sleet and Thunder' },
    1882: { iconFile: 'TsSlt', textModifier: 'Heavy Sleet and Thunder' },
    1885: { iconFile: 'TsSlt', textModifier: 'Sleet and Thunder/ Windy' },
    1886: { iconFile: 'TsSlt', textModifier: 'Light Sleet and Thunder' },
    1887: { iconFile: 'TsSlt', textModifier: 'Heavy Sleet and Thunder' },
    1890: { iconFile: 'Slt', textModifier: 'Sleet/Windy' },
    1891: { iconFile: 'Slt', textModifier: 'Light Sleet/Windy' },
    1892: { iconFile: 'Slt', textModifier: 'Heavy Sleet/ Windy' },
    1895: { iconFile: 'Slt', textModifier: 'Sleet/Windy/Fog' },
    1896: { iconFile: 'Slt', textModifier: 'Light Sleet/ Windy/ Fog' },
    1897: { iconFile: 'Slt', textModifier: 'Heavy Sleet/ Windy/ Fog' },
    1900: { iconFile: 'Dust', textModifier: 'Widespread Dust' },
    1901: { iconFile: 'Dust', textModifier: 'Low Drifting Dust' },
    1902: { iconFile: 'Dust', textModifier: 'Blowing Dust' },
    1910: { iconFile: 'Dust', textModifier: 'Sand' },
    1911: { iconFile: 'Dust', textModifier: 'Low Drifting Sand' },
    1912: { iconFile: 'Dust', textModifier: 'Blowing Sand' },
    1919: { iconFile: 'Dust', textModifier: 'Blowing Sand Nearby' },
    1920: { iconFile: 'Dust', textModifier: 'Sandstorm' },
    1922: { iconFile: 'Dust', textModifier: 'Heavy Sandstorm' },
    1929: { iconFile: 'Dust', textModifier: 'Sandstorm in the Vicinity' },
    1930: { iconFile: 'Dust', textModifier: 'Volcanic Ash' },
    1931: { iconFile: 'Dust', textModifier: 'Duststorm' },
    1932: { iconFile: 'Dust', textModifier: 'Heavy Duststorm' },
    1939: { iconFile: 'Dust', textModifier: 'Duststorm in the Vicinity' },
    1960: { iconFile: 'Dust', textModifier: 'Volcanic Ash/ Windy' },
    1961: { iconFile: 'Dust', textModifier: 'Duststorm/Windy' },
    1962: { iconFile: 'Dust', textModifier: 'Heavy Duststorm/ Windy' },
    1969: { iconFile: 'Wnd', textModifier: 'Duststorm in the Vicinity' },
    1970: { iconFile: 'Dust', textModifier: 'Sandstorm/Windy' },
    1972: { iconFile: 'Dust', textModifier: 'Heavy Sandstorm/ Windy' },
    1979: { iconFile: 'Wnd', textModifier: 'Sandstorm in the Vicinity' },
    1980: { iconFile: 'Dust', textModifier: 'Sand/Windy' },
    1981: { iconFile: 'Dust', textModifier: 'Low Drifting Sand/ Windy' },
    1982: { iconFile: 'Dust', textModifier: 'Blowing Sand/ Windy' },
    1989: { iconFile: 'Wnd', textModifier: 'Blowing Sand Nearby/ Windy' },
    1990: { iconFile: 'Dust', textModifier: 'Widespread Dust/ Windy' },
    1991: { iconFile: 'Dust', textModifier: 'Low Drifting Dust/ Windy' },
    1992: { iconFile: 'Dust', textModifier: 'Blowing Dust/ Windy' },
    2000: { iconFile: 'Fog', textModifier: 'Fog' },
    2001: { iconFile: 'Fog', textModifier: 'Patches of Fog' },
    2002: { iconFile: 'Cld', textModifier: 'Mist' },
    2021: { iconFile: 'Fog', textModifier: 'Shallow Fog' },
    2022: { iconFile: 'Fog', textModifier: 'Partial Fog' },
    2081: { iconFile: 'Fog', textModifier: 'Shallow Fog/ Windy' },
    2082: { iconFile: 'Fog', textModifier: 'Partial Fog/ Windy' },
    2090: { iconFile: 'Fog', textModifier: 'Fog/Windy' },
    2091: { iconFile: 'Fog', textModifier: 'Patches of Fog/ Windy' },
    2092: { iconFile: 'Wnd', textModifier: 'Mist/Windy' },
    2100: { iconFile: 'Haze', textModifier: 'Haze' },
    2190: { iconFile: 'Haze', textModifier: 'Haze/Windy' },
    2200: { iconFile: 'Smoke', textModifier: 'Smoke' },
    2290: { iconFile: 'Smoke', textModifier: 'Smoke/Windy' },
    2410: { iconFile: 'Wnd', textModifier: 'Blowing Spray' },
    2420: { iconFile: 'Wnd', textModifier: 'Sand/Dust Whirlwinds' },
    2429: { iconFile: 'Wnd', textModifier: 'Sand/Dust Whirls Nearby' },
    2430: { iconFile: 'Wnd', textModifier: 'Squalls' },
    2450: { iconFile: 'Wnd', textModifier: 'Squalls/ Windy/ Fog' },
    2460: { iconFile: 'Wnd', textModifier: 'Squalls/Fog' },
    2470: { iconFile: 'Wnd', textModifier: 'Squalls/Windy' },
    2480: { iconFile: 'Wnd', textModifier: 'Sand/ Dust Whirlwinds/ Windy' },
    2489: { iconFile: 'Wnd', textModifier: 'Sand/Dust Whirls Nearby' },
    2490: { iconFile: 'Wnd', textModifier: 'Blowing Spray/ Windy', narration: '2410' },
    2510: { iconFile: 'Frigid', textModifier: 'Ice Crystals', narration: '2510' },
    2570: { iconFile: 'Frigid', textModifier: 'Ice Crystals/ Windy/ Fog', narration: '2510' },
    2580: { iconFile: 'Frigid', textModifier: 'Ice Crystals/Fog', narration: '2510' },
    2590: { iconFile: 'Frigid', textModifier: 'Ice Crystals/ Windy', narration: '2510' },
    2600: { iconFile: 'Cld', textModifier: 'Cloudy', narration: '2600' },
    2680: { iconFile: 'LtRa', textModifier: 'Showers Nearby', narration: '2680' },
    2681: { iconFile: 'LtRa', textModifier: 'Showers Nearby', narration: '2680' },
    2685: { iconFile: 'LtRa', textModifier: 'Showers Nearby', narration: '2680' },
    2686: { iconFile: 'LtRa', textModifier: 'Showers Nearby', narration: '2680' },
    2690: { iconFile: 'CldWnd', textModifier: 'Cloudy/Windy', narration: '2690' },
    2700: { iconFile: 'NMc', textModifier: 'Mostly Cloudy', narration: '2700' },
    2780: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2781: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2785: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2786: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2790: { iconFile: 'CldWnd', textModifier: 'Mostly Cloudy/ Windy', narration: '2790' },
    2800: { iconFile: 'DMc', textModifier: 'Mostly Cloudy', narration: '2700' },
    2880: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2881: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2885: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2886: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2890: { iconFile: 'CldWnd', textModifier: 'Mostly Cloudy/ Windy', narration: '2790' },
    2900: { iconFile: 'NPc', textModifier: 'Partly Cloudy', narration: '2900' },
    2980: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2981: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2985: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2986: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    2990: { iconFile: 'NPcWnd', textModifier: 'Partly Cloudy/ Windy', narration: '2990' },
    3000: { iconFile: 'DPc', textModifier: 'Partly Cloudy', narration: '2900' },
    3080: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3081: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3085: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3086: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3090: { iconFile: 'PcWnd', textModifier: 'Partly Cloudy/ Windy', narration: '2990' },
    3100: { iconFile: 'NClr', textModifier: 'Clear', narration: '3100' },
    3180: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3181: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3185: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3186: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3190: { iconFile: 'NClrWnd', textModifier: 'Clear/Windy', narration: '3190' },
    3200: { iconFile: 'Sun', textModifier: 'Sunny', narration: '3200' },
    3280: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3281: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3285: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3286: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3290: { iconFile: 'SunWnd', textModifier: 'Sunny/Windy', narration: '3290' },
    3300: { iconFile: 'NClrB12', textModifier: 'Fair', narration: '3400' },
    3380: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3381: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3385: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3386: { iconFile: 'NSctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3390: { iconFile: 'NClrWnd', textModifier: 'Fair/Windy', narration: '3390' },
    3400: { iconFile: 'DClrB12', textModifier: 'Fair', narration: '3400' },
    3480: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3481: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3485: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3486: { iconFile: 'SctSh', textModifier: 'Showers Nearby', narration: '2680' },
    3490: { iconFile: 'SunWnd', textModifier: 'Fair/Windy', narration: '3390' },
    3540: { iconFile: 'Thun', textModifier: 'Thunder', narration: '429' },
    3549: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3570: { iconFile: 'Thun', textModifier: 'Thunder/ Windy/ Fog', narration: '429' },
    3579: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3580: { iconFile: 'Thun', textModifier: 'Thunder/Fog', narration: '429' },
    3589: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3590: { iconFile: 'Thun', textModifier: 'Thunder/Windy', narration: '429' },
    3599: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3840: { iconFile: 'Thun', textModifier: 'Thunder', narration: '429' },
    3849: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3870: { iconFile: 'Thun', textModifier: 'Thunder/ Windy/ Fog' },
    3879: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3880: { iconFile: 'Thun', textModifier: 'Thunder/Fog', narration: '429' },
    3889: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    3890: { iconFile: 'Thun', textModifier: 'Thunder/Windy', narration: '429' },
    3899: { iconFile: 'Thun', textModifier: 'Thunder in the Vicinity', narration: '429' },
    4400: { iconFile: 'Cld', textModifier: 'Unknown Precipitation' },
    4470: { iconFile: 'Fog', textModifier: 'Unknown Precipitation/ Fog' },
    4480: { iconFile: 'Wnd', textModifier: 'Unknown Precipitation' },
    4490: { iconFile: 'Fog', textModifier: 'Unknown Precipitation/ Fog' },
}
var codetoFcst = {
    300: { iconFile: 'StrTs', textModifier: "Strong T'storms", mov: "heavy_thunderstorms" },
    310: { iconFile: 'StrTs', textModifier: "Strong T'storms / Wind", mov: "heavy_thunderstorms" },
    400: { iconFile: 'Tss', textModifier: "T'storms", mov: "thunderstorms" },
    402: { iconFile: 'Tss', textModifier: "Heavy T'storms", mov: "heavy_thunderstorms" },
    410: { iconFile: 'Tss', textModifier: "T'storms / Wind", mov: "thunderstorms" },
    412: { iconFile: 'Tss', textModifier: "Heavy T'storms / Wind", mov: "heavy_thunderstorms" },
    500: { iconFile: 'RaSn', textModifier: 'Rain / Snow', mov: "rain_snow" },
    510: { iconFile: 'RaSn', textModifier: 'Rain / Snow / Wind', mov: "rain_snow" },
    600: { iconFile: 'RaSlt', textModifier: 'Rain / Sleet', mov: "freezing_rain" },
    601: { iconFile: 'RaSlt', textModifier: 'Light Rain / Sleet', mov: "freezing_rain" },
    610: { iconFile: 'RaSlt', textModifier: 'Rain / Sleet / Wind', mov: "freezing_rain" },
    611: { iconFile: 'RaSlt', textModifier: 'Light Rain / Sleet / Wind', mov: "freezing_rain" },
    700: { iconFile: 'Mix', textModifier: 'Wintry Mix', mov: "wintry_mix" },
    701: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix', mov: "wintry_mix" },
    710: { iconFile: 'Mix', textModifier: 'Wintry Mix / Wind', mov: "wintry_mix" },
    711: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix / Wind', mov: "wintry_mix" },
    800: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle', mov: "freezing_rain" },
    810: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle / Wind', mov: "freezing_rain" },
    850: { iconFile: 'FrzDrz', textModifier: 'Freezing Drizzle / Fog', mov: "freezing_rain" },
    900: { iconFile: 'Drz', textModifier: 'Drizzle', mov: "light_rain" },
    910: { iconFile: 'Drz', textModifier: 'Drizzle / Wind', mov: "light_rain" },
    950: { iconFile: 'DrzFog', textModifier: 'Drizzle / Fog', mov: "light_rain" },
    1000: { iconFile: 'FrzRa', textModifier: 'Freezing Rain', mov: "freezing_rain" },
    1001: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain', mov: "freezing_rain" },
    1002: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain', mov: "freezing_rain" },
    1010: { iconFile: 'FrzRa', textModifier: 'Freezing Rain / Wind', mov: "freezing_rain" },
    1011: { iconFile: 'FrzRa', textModifier: 'Light Freezing Rain / Wind', mov: "freezing_rain" },
    1012: { iconFile: 'FrzRa', textModifier: 'Heavy Freezing Rain / Wind', mov: "freezing_rain" },
    1051: { iconFile: 'FrzDrz', textModifier: 'Light Freezing Rain / Fog', mov: "freezing_rain" },
    1100: { iconFile: 'LtRa', textModifier: 'Showers', mov: "light_rain" },
    1110: { iconFile: 'LtRa', textModifier: 'Showers / Wind', mov: "light_rain" },
    1140: { iconFile: 'LtRa', textModifier: "T'showers", mov: "thunderstorms" },
    1170: { iconFile: 'LtRa', textModifier: "T'showers / Wind", mov: "thunderstorms" },
    1200: { iconFile: 'Ra', textModifier: 'Rain', mov: "heavy_rain" },
    1201: { iconFile: 'LtRa', textModifier: 'Light Rain', mov: "light_rain" },
    1210: { iconFile: 'WndRa', textModifier: 'Rain / Wind', mov: "windy_rain" },
    1211: { iconFile: 'WndRa', textModifier: 'Light Rain / Wind', mov: "windy_rain" },
    1240: { iconFile: 'Ra', textModifier: 'Rain / Thunder', mov: "heavy_rain" },
    1251: { iconFile: 'LtRa', textModifier: 'Light Rain / Fog', mov: "light_rain" },
    1270: { iconFile: 'WndRa', textModifier: 'Rain / Thunder / Wind', mov: "windy_rain" },
    1300: { iconFile: 'SnFl', textModifier: 'Flurries', mov: "light_snow" },
    1310: { iconFile: 'SnFl', textModifier: 'Flurries / Wind', mov: "windy_snow" },
    1400: { iconFile: 'LtSn', textModifier: 'Snow Shower', mov: "light_snow" },
    1410: { iconFile: 'LtSn', textModifier: 'Snow Shower / Wind', mov: "windy_snow" },
    1600: { iconFile: 'Sn', textModifier: 'Snow', mov: "heavy_snow" },
    1601: { iconFile: 'LtSn', textModifier: 'Light Snow', mov: "light_snow" },
    1610: { iconFile: 'WndSn', textModifier: 'Snow / Wind', mov: "windy_snow" },
    1611: { iconFile: 'WndSn', textModifier: 'Light Snow / Wind', mov: "windy_snow" },
    1651: { iconFile: 'LtSn', textModifier: 'Light Snow / Fog', mov: "light_snow" },
    1800: { iconFile: 'Slt', textModifier: 'Sleet', mov: "freezing_rain" },
    1801: { iconFile: 'Slt', textModifier: 'Light Sleet', mov: "freezing_rain" },
    1810: { iconFile: 'Slt', textModifier: 'Sleet / Wind', mov: "freezing_rain" },
    1811: { iconFile: 'Slt', textModifier: 'Light Sleet / Wind', mov: "freezing_rain" },
    2000: { iconFile: 'Fog', textModifier: 'Foggy', mov: "fog" },
    2010: { iconFile: 'Fog', textModifier: 'Foggy / Wind', mov: "fog" },
    2100: { iconFile: 'Haze', textModifier: 'Hazy', mov: "fog" },
    2110: { iconFile: 'Wnd', textModifier: 'Hazy / Wind', mov: "fog" },
    2600: { iconFile: 'Cld', textModifier: 'Cloudy', mov: "cloudy" },
    2610: { iconFile: 'CldWnd', textModifier: 'Cloudy / Wind', mov: "cloudy" },
    2700: { iconFile: 'NMc', textModifier: 'Mostly Cloudy', mov: "mostly_cloudy" },
    2710: { iconFile: 'Wnd', textModifier: 'Mostly Cloudy / Wind', mov: "mostly_cloudy" },
    2800: { iconFile: 'DMc', textModifier: 'Mostly Cloudy', mov: "mostly_cloudy" },
    2810: { iconFile: 'Wnd', textModifier: 'Mostly Cloudy / Wind', mov: "windy" },
    2900: { iconFile: 'NPc', textModifier: 'Partly Cloudy', mov: "partly_cloudy" },
    2910: { iconFile: 'NPcWnd', textModifier: 'Partly Cloudy / Wind', mov: "windy" },
    3000: { iconFile: 'DPc', textModifier: 'Partly Cloudy', mov: "partly_cloudy" },
    3010: { iconFile: 'PcWnd', textModifier: 'Partly Cloudy / Wind', mov: "windy" },
    3100: { iconFile: 'NClr', textModifier: 'Clear', mov: "clear" },
    3110: { iconFile: 'NClrWnd', textModifier: 'Clear / Wind', mov: "clear" },
    3200: { iconFile: 'Sun', textModifier: 'Sunny', mov: "sunny", narration: "N058555" },
    3210: { iconFile: 'SunWnd', textModifier: 'Sunny / Wind', mov: "windy" },
    3300: { iconFile: 'NMClr', textModifier: 'Mostly Clear', mov: "clear" },
    3310: { iconFile: 'Wnd', textModifier: 'Mostly Clear / Wind' },
    3400: { iconFile: 'MSun', textModifier: 'Mostly Sunny', mov: "sunny" },
    3410: { iconFile: 'SunWnd', textModifier: 'Mostly Sunny / Wind', mov: "windy" },
    3700: { iconFile: 'IsoTs', textModifier: "Isolated T'storms", mov: "isolated_thunderstorms" },
    3709: { iconFile: 'NSctTs', textModifier: "Isolated T'storms", mov: "isolated_thunderstorms" },
    3710: { iconFile: 'IsoTs', textModifier: "Isolated T'storms / Wind", mov: "isolated_thunderstorms" },
    3719: { iconFile: 'NSctTs', textModifier: "Isolated T'storms / Wind", mov: "isolated_thunderstorms" },
    3800: { iconFile: 'SctTs', textModifier: "Sct'd T'storms", mov: "isolated_thunderstorms" },
    3809: { iconFile: 'NSctTs', textModifier: "Sct'd T'storms", mov: "isolated_thunderstorms" },
    3810: { iconFile: 'SctTs', textModifier: "Sct'd T'storms / Wind", mov: "isolated_thunderstorms" },
    3819: { iconFile: 'NSctTs', textModifier: "Sct'd T'storms / Wind", mov: "isolated_thunderstorms" },
    3900: { iconFile: 'SctSh', textModifier: "Sct'd Showers", mov: "light_rain" },
    3909: { iconFile: 'NSctSh', textModifier: "Sct'd Showers", mov: "light_rain" },
    3910: { iconFile: 'SctSh', textModifier: "Sct'd Showers / Wind", mov: "windy_rain" },
    3919: { iconFile: 'NSctSh', textModifier: "Sct'd Showers / Wind", mov: "windy_rain" },
    4000: { iconFile: 'HvyRa', textModifier: 'Heavy Rain', mov: "heavy_rain" },
    4010: { iconFile: 'WndRa', textModifier: 'Heavy Rain / Wind', mov: "windy_rain" },
    4100: { iconFile: 'SctSnSh', textModifier: "Sct'd Snow Showers", mov: "light_rain" },
    4109: { iconFile: 'NSctSnSh', textModifier: "Sct'd Snow Showers", mov: "light_rain" },
    4110: { iconFile: 'SctSnSh', textModifier: "Sct'd Snow Shower / Wind", mov: "windy_rain" },
    4119: { iconFile: 'NSctSnSh', textModifier: "Sct'd Snow Showers / Wind", mov: "windy_rain" },
    4200: { iconFile: 'HvySn', textModifier: 'Heavy Snow', mov: "heavy_snow" },
    4210: { iconFile: 'WndSn', textModifier: 'Heavy Snow / Wind', mov: "windy_snow" },
    4300: { iconFile: 'Blizz', textModifier: 'Blizzard', mov: "windy_snow" },
    4500: { iconFile: 'Drz', textModifier: 'Sprinkles', mov: "light_rain" },
    4510: { iconFile: 'Drz', textModifier: 'Sprinkles / Wind', mov: "light_rain" },
    4600: { iconFile: 'Drz', textModifier: 'Few Showers', mov: "light_rain" },
    4610: { iconFile: 'Drz', textModifier: 'Few Showers / Wind', mov: "light_rain" },
    4700: { iconFile: 'LtSn', textModifier: 'Few Snow Showers', mov: "light_snow" },
    4710: { iconFile: 'LtSn', textModifier: 'Few Snow Showers / Wind', mov: "light_snow" },
    4800: { iconFile: 'SctFl', textModifier: "Sct'd Flurries", mov: "light_snow" },
    4809: { iconFile: 'NSctFl', textModifier: "Sct'd Flurries", mov: "light_snow" },
    4810: { iconFile: 'Wnd', textModifier: "Sct'd Flurries / Wind", mov: "light_snow" },
    4819: { iconFile: 'Wnd', textModifier: "Sct'd Flurries / Wind", mov: "light_snow" },
    4900: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers', mov: "rain_snow" },
    4910: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers / Wind', mov: "rain_snow" },
    5000: { iconFile: 'WndSn', textModifier: 'Snow / Blowing Snow', mov: "windy_snow" },
    5100: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain / Sleet', mov: "freezing_rain" },
    5101: { iconFile: 'SltFrzRa', textModifier: 'Light Frz Rain / Sleet', mov: "freezing_rain" },
    5110: { iconFile: 'SltFrzRa', textModifier: 'Freezing Rain / Sleet / Wind', mov: "freezing_rain" },
    5111: { iconFile: 'SltFrzRa', textModifier: 'Light Frz Rain / Sleet / Wind', mov: "freezing_rain" },
    5200: { iconFile: 'SnSlt', textModifier: 'Snow / Sleet', mov: "freezing_rain" },
    5210: { iconFile: 'SnSlt', textModifier: 'Snow / Sleet / Wind', mov: "freezing_rain" },
    5300: { iconFile: 'RaFrzRa', textModifier: 'Rain / Frz Rain', mov: "freezing_rain" },
    5301: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Frz Rain', mov: "freezing_rain" },
    5302: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain / Frz Rain', mov: "freezing_rain" },
    5310: { iconFile: 'RaFrzRa', textModifier: 'Rain / Frz Rain / Wind', mov: "freezing_rain" },
    5311: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Frz Rain / Wind', mov: "freezing_rain" },
    5312: { iconFile: 'RaFrzRa', textModifier: 'Heavy Rain / Frz Rain / Wind', mov: "freezing_rain" },
    5351: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Frz Rain / Fog', mov: "freezing_rain" },
    5400: { iconFile: 'HvySn', textModifier: 'Snow Squalls', mov: "heavy_snow" },
    5409: { iconFile: 'HvySn', textModifier: 'Snow Squalls', mov: "heavy_snow" },
    5500: { iconFile: 'SctSh', textModifier: 'Squalls', mov: "heavy_rain" },
    5509: { iconFile: 'NSctSh', textModifier: 'Squalls', mov: "heavy_rain" },
    5600: { iconFile: 'TsSn', textModifier: 'Thunder Snow', mov: "heavy_snow" },
    5610: { iconFile: 'TsSn', textModifier: 'Thunder Snow / Wind', mov: "heavy_snow" },
    5700: { iconFile: 'SctStrTs', textModifier: "Scattered Strong T'storms", mov: "heavy_thunderstorms" },
    5709: { iconFile: 'NSctStrTs', textModifier: "Sct'd Strong T'storms", mov: "heavy_thunderstorms" },
    5710: { iconFile: 'SctStrTs', textModifier: "Sct'd Strong T'storms / Wind", mov: "heavy_thunderstorms" },
    5719: { iconFile: 'NSctStrTs', textModifier: "Sct'd Strong T'storms / Wind", mov: "heavy_thunderstorms" },
    6000: { iconFile: 'Drz', textModifier: 'Drizzle Early', mov: "light_rain" },
    6003: { iconFile: 'AMDrz', textModifier: 'AM Drizzle', mov: "light_rain" },
    6010: { iconFile: 'Drz', textModifier: 'Drizzle / Wind Early', mov: "light_rain" },
    6013: { iconFile: 'AMDrz', textModifier: 'AM Drizzle / Wind', mov: "light_rain" },
    6100: { iconFile: 'LtRa', textModifier: 'Showers Early', mov: "light_rain" },
    6103: { iconFile: 'AMSh', textModifier: 'AM Showers', mov: "light_rain" },
    6110: { iconFile: 'LtRa', textModifier: 'Showers / Wind Early', mov: "light_rain" },
    6113: { iconFile: 'AMSh', textModifier: 'AM Showers / Wind', mov: "light_rain" },
    6140: { iconFile: 'LtRa', textModifier: "T'showers Early", mov: "isolated_thunderstorms_night" },
    6143: { iconFile: 'AMSh', textModifier: "AM T'showers", mov: "isolated_thunderstorms" },
    6170: { iconFile: 'LtRa', textModifier: "T'showers / Wind Early", mov: "isolated_thunderstorms_night" },
    6173: { iconFile: 'AMSh', textModifier: "AM T'showers", mov: "isolated_thunderstorms" },
    6200: { iconFile: 'Tss', textModifier: "T'storms Early", mov: "isolated_thunderstorms_night" },
    6203: { iconFile: 'AMTs', textModifier: "AM T'storms", mov: "isolated_thunderstorms" },
    6210: { iconFile: 'Tss', textModifier: "T'storms / Wind Early", mov: "isolated_thunderstorms_night" },
    6213: { iconFile: 'AMTs', textModifier: "AM T'storms / Wind", mov: "isolated_thunderstorms" },
    6300: { iconFile: 'Ra', textModifier: 'Rain Early', mov: "light_rain" },
    6301: { iconFile: 'LtRa', textModifier: 'Light Rain Early', mov: "light_rain" },
    6303: { iconFile: 'AMRa', textModifier: 'AM Rain', mov: "light_rain" },
    6304: { iconFile: 'AMSh', textModifier: 'AM Light Rain', mov: "light_rain" },
    6310: { iconFile: 'WndRa', textModifier: 'Rain / Wind Early', mov: "windy_rain" },
    6311: { iconFile: 'LtRa', textModifier: 'Light Rain / Wind Early', mov: "windy_rain" },
    6313: { iconFile: 'AMRa', textModifier: 'AM Rain / Wind', mov: "windy_rain" },
    6314: { iconFile: 'AMSh', textModifier: 'AM Light Rain / Wind', mov: "windy_rain" },
    6400: { iconFile: 'RaSn', textModifier: 'Rain / Snow Early', mov: "rain_snow" },
    6401: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers Early', mov: "rain_snow" },
    6403: { iconFile: 'AMRaSn', textModifier: 'AM Rain /Snow', mov: "rain_snow" },
    6404: { iconFile: 'AMRaSn', textModifier: 'AM Rain / Snow Showers', mov: "rain_snow" },
    6410: { iconFile: 'RaSn', textModifier: 'Rain / Snow / Wind Early', mov: "rain_snow" },
    6411: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers / Wind Early', mov: "rain_snow" },
    6413: { iconFile: 'AMRaSn', textModifier: 'AM Rain / Snow / Wind', mov: "rain_snow" },
    6414: { iconFile: 'AMRaSn', textModifier: 'AM Rain / Snow Showers', mov: "rain_snow" },
    6500: { iconFile: 'RaFrzRa', textModifier: 'Rain / Ice Early', mov: "freezing_rain" },
    6501: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Ice Early', mov: "freezing_rain" },
    6503: { iconFile: 'RaFrzRa', textModifier: 'AM Rain / Ice', mov: "freezing_rain" },
    6504: { iconFile: 'RaFrzRa', textModifier: 'AM Light Rain / Ice', mov: "freezing_rain" },
    6510: { iconFile: 'RaFrzRa', textModifier: 'Rain / Ice / Wind Early', mov: "freezing_rain" },
    6511: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Ice / Wind Early', mov: "freezing_rain" },
    6513: { iconFile: 'RaFrzRa', textModifier: 'AM Rain / Ice / Wind', mov: "freezing_rain" },
    6514: { iconFile: 'RaFrzRa', textModifier: 'AM Light Rain / Ice / Wind', mov: "freezing_rain" },
    6600: { iconFile: 'SltFrzRa', textModifier: 'Ice Early', mov: "freezing_rain" },
    6603: { iconFile: 'SltFrzRa', textModifier: 'AM Ice', mov: "freezing_rain" },
    6610: { iconFile: 'SltFrzRa', textModifier: 'Ice / Wind Early', mov: "freezing_rain" },
    6613: { iconFile: 'SltFrzRa', textModifier: 'AM Ice / Wind', mov: "freezing_rain" },
    6700: { iconFile: 'Mix', textModifier: 'Wintry Mix Early', mov: "wintry_mix" },
    6701: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix Early', mov: "wintry_mix" },
    6703: { iconFile: 'AMMix', textModifier: 'AM Wintry Mix', mov: "wintry_mix" },
    6704: { iconFile: 'AMMix', textModifier: 'AM Light Wintry Mix', mov: "wintry_mix" },
    6710: { iconFile: 'Mix', textModifier: 'Wintry Mix / Wind Early', mov: "wintry_mix" },
    6711: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix / Wind Early', mov: "wintry_mix" },
    6713: { iconFile: 'AMMix', textModifier: 'AM Wintry Mix / Wind', mov: "wintry_mix" },
    6714: { iconFile: 'AMMix', textModifier: 'AM Light Wintry Mix / Wind', mov: "wintry_mix" },
    6800: { iconFile: 'LtSn', textModifier: 'Snow Showers Early', mov: "light_snow" },
    6803: { iconFile: 'AMSnSh', textModifier: 'AM Snow Showers', mov: "light_snow" },
    6810: { iconFile: 'LtSn', textModifier: 'Snow Showers / Wind Early', mov: "light_snow" },
    6813: { iconFile: 'AMSnSh', textModifier: 'AM Snow Showers / Wind', mov: "light_snow" },
    6900: { iconFile: 'Sn', textModifier: 'Snow Early', mov: "light_snow" },
    6901: { iconFile: 'LtSn', textModifier: 'Light Snow Early', mov: "light_snow" },
    6903: { iconFile: 'AMSn', textModifier: 'AM Snow', mov: "light_snow" },
    6904: { iconFile: 'AMSnSh', textModifier: 'AM Light Snow', mov: "light_snow" },
    6910: { iconFile: 'WndSn', textModifier: 'Snow / Wind Early', mov: "light_snow" },
    6911: { iconFile: 'LtSn', textModifier: 'Light Snow / Wind Early', mov: "light_snow" },
    6913: { iconFile: 'AMSn', textModifier: 'AM Snow / Wind', mov: "light_snow" },
    6914: { iconFile: 'AMSnSh', textModifier: 'AM Light Snow / Wind', mov: "light_snow" },
    7000: { iconFile: 'Drz', textModifier: 'Drizzle Late', mov: "light_rain" },
    7003: { iconFile: 'PMDrz', textModifier: 'PM Drizzle', mov: "light_rain" },
    7010: { iconFile: 'Drz', textModifier: 'Drizzle / Wind Late', mov: "light_rain" },
    7013: { iconFile: 'PMDrz', textModifier: 'PM Drizzle / Wind', mov: "light_rain" },
    7100: { iconFile: 'LtRa', textModifier: 'Showers Late', mov: "light_rain" },
    7103: { iconFile: 'PMSh', textModifier: 'PM Showers', mov: "light_rain" },
    7110: { iconFile: 'LtRa', textModifier: 'Showers / Wind Late', mov: "light_rain" },
    7113: { iconFile: 'PMSh', textModifier: 'PM Showers / Wind', mov: "light_rain" },
    7140: { iconFile: 'LtRa', textModifier: "T'showers Late", mov: "isolated_thunderstorms_night" },
    7143: { iconFile: 'PMSh', textModifier: "PM T'showers", mov: "isolated_thunderstorms" },
    7170: { iconFile: 'LtRa', textModifier: "T'showers / Wind Late", mov: "isolated_thunderstorms_night" },
    7173: { iconFile: 'PMSh', textModifier: "PM T'showers", mov: "isolated_thunderstorms" },
    7200: { iconFile: 'Tss', textModifier: "T'storms Late", mov: "isolated_thunderstorms_night" },
    7203: { iconFile: 'PMTs', textModifier: "PM T'storms", mov: "isolated_thunderstorms" },
    7210: { iconFile: 'Tss', textModifier: "T'storms / Wind Late", mov: "isolated_thunderstorms_night" },
    7213: { iconFile: 'PMTs', textModifier: "PM T'storms / Wind", mov: "isolated_thunderstorms" },
    7300: { iconFile: 'Ra', textModifier: 'Rain Late', mov: "light_rain" },
    7301: { iconFile: 'LtRa', textModifier: 'Light Rain Late', mov: "light_rain" },
    7303: { iconFile: 'PMRa', textModifier: 'PM Rain', mov: "light_rain" },
    7304: { iconFile: 'PMSh', textModifier: 'PM Light Rain', mov: "light_rain" },
    7310: { iconFile: 'WndRa', textModifier: 'Rain / Wind Late', mov: "windy_rain" },
    7311: { iconFile: 'LtRa', textModifier: 'Light Rain / Wind Late', mov: "light_rain" },
    7313: { iconFile: 'PMRa', textModifier: 'PM Rain / Wind', mov: "windy_rain" },
    7314: { iconFile: 'PMSh', textModifier: 'PM Light Rain / Wind', mov: "light_rain" },
    7400: { iconFile: 'RaSn', textModifier: 'Rain / Snow Late', mov: "rain_snow" },
    7401: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers Late', mov: "rain_snow" },
    7403: { iconFile: 'PMRaSn', textModifier: 'PM Rain / Snow', mov: "rain_snow" },
    7404: { iconFile: 'PMRaSn', textModifier: 'PM Rain / Snow Showers', mov: "rain_snow" },
    7410: { iconFile: 'RaSn', textModifier: 'Rain / Snow / Wind Late', mov: "rain_snow" },
    7411: { iconFile: 'RaSn', textModifier: 'Rain / Snow Showers / Wind Late', mov: "rain_snow" },
    7413: { iconFile: 'PMRaSn', textModifier: 'PM Rain / Snow / Wind', mov: "rain_snow" },
    7414: { iconFile: 'PMRaSn', textModifier: 'PM Rain / Snow Showers', mov: "rain_snow" },
    7500: { iconFile: 'RaFrzRa', textModifier: 'Rain / Ice Late', mov: "freezing_rain" },
    7501: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Ice Late', mov: "freezing_rain" },
    7503: { iconFile: 'RaFrzRa', textModifier: 'PM Rain / Ice', mov: "freezing_rain" },
    7504: { iconFile: 'RaFrzRa', textModifier: 'PM Light Rain / Ice', mov: "freezing_rain" },
    7510: { iconFile: 'RaFrzRa', textModifier: 'Rain / Ice / Wind Late', mov: "freezing_rain" },
    7511: { iconFile: 'RaFrzRa', textModifier: 'Light Rain / Ice / Wind Late', mov: "freezing_rain" },
    7513: { iconFile: 'RaFrzRa', textModifier: 'PM Rain / Ice / Wind', mov: "freezing_rain" },
    7514: { iconFile: 'RaFrzRa', textModifier: 'PM Light Rain / Ice / Wind', mov: "freezing_rain" },
    7600: { iconFile: 'SltFrzRa', textModifier: 'Ice Late', mov: "freezing_rain" },
    7603: { iconFile: 'SltFrzRa', textModifier: 'PM Ice', mov: "freezing_rain" },
    7610: { iconFile: 'SltFrzRa', textModifier: 'Ice / Wind Late', mov: "freezing_rain" },
    7613: { iconFile: 'SltFrzRa', textModifier: 'PM Ice / Wind', mov: "freezing_rain" },
    7700: { iconFile: 'Mix', textModifier: 'Wintry Mix Late', mov: "wintry_mix" },
    7701: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix Late', mov: "wintry_mix" },
    7703: { iconFile: 'PMMix', textModifier: 'PM Wintry Mix', mov: "wintry_mix" },
    7704: { iconFile: 'PMMix', textModifier: 'PM Light Wintry Mix', mov: "wintry_mix" },
    7710: { iconFile: 'Mix', textModifier: 'Wintry Mix / Wind Late', mov: "wintry_mix" },
    7711: { iconFile: 'LtMix', textModifier: 'Light Wintry Mix / Wind Late', mov: "wintry_mix" },
    7713: { iconFile: 'PMMix', textModifier: 'PM Wintry Mix / Wind', mov: "wintry_mix" },
    7714: { iconFile: 'PMMix', textModifier: 'PM Light Wintry Mix / Wind', mov: "wintry_mix" },
    7800: { iconFile: 'LtSn', textModifier: 'Snow Showers Late', mov: "light_snow" },
    7803: { iconFile: 'PMSnSh', textModifier: 'PM Snow Showers', mov: "light_snow" },
    7810: { iconFile: 'LtSn', textModifier: 'Snow Showers / Wind Late', mov: "light_snow" },
    7813: { iconFile: 'PMSnSh', textModifier: 'PM Snow Showers / Wind', mov: "light_snow" },
    7900: { iconFile: 'Sn', textModifier: 'Snow Late', mov: "light_snow" },
    7901: { iconFile: 'LtSn', textModifier: 'Light Snow Late', mov: "light_snow" },
    7903: { iconFile: 'PMSn', textModifier: 'PM Snow', mov: "light_snow" },
    7904: { iconFile: 'PMSnSh', textModifier: 'PM Light Snow', mov: "light_snow" },
    7910: { iconFile: 'WndSn', textModifier: 'Snow / Wind Late', mov: "windy_snow" },
    7911: { iconFile: 'LtSn', textModifier: 'Light Snow / Wind Late', mov: "light_snow" },
    7913: { iconFile: 'PMSn', textModifier: 'PM Snow / Wind', mov: "light_snow" },
    7914: { iconFile: 'PMSnSh', textModifier: 'PM Light Snow / Wind', mov: "light_snow" },
    8000: { iconFile: 'RaToSn', textModifier: 'Rain to Snow', mov: "rain_snow" },
    8010: { iconFile: 'RaToSn', textModifier: 'Rain to Snow / Wind', mov: "rain_snow" },
    8100: { iconFile: 'RaFrzRa', textModifier: 'Rain to Ice', mov: "rain_snow" },
    8110: { iconFile: 'RaFrzRa', textModifier: 'Rain to Ice / Wind', mov: "rain_snow" },
    8200: { iconFile: 'SnToRa', textModifier: 'Snow to Rain', mov: "rain_snow" },
    8210: { iconFile: 'SnToRa', textModifier: 'Snow to Rain / Wind', mov: "rain_snow" },
    8300: { iconFile: 'Mix', textModifier: 'Snow and Ice to Rain', mov: "rain_snow" },
    8310: { iconFile: 'Mix', textModifier: 'Snow and Ice to Rain / Wind', mov: "rain_snow" },
    8400: { iconFile: 'SnFrzRa', textModifier: 'Snow to Ice', mov: "wintry_mix" },
    8410: { iconFile: 'SnFrzRa', textModifier: 'Snow to Ice / Wind', mov: "wintry_mix" },
    8500: { iconFile: 'RaFrzRa', textModifier: 'Ice to Rain', mov: "freezing_rain" },
    8510: { iconFile: 'RaFrzRa', textModifier: 'Ice to Rain / Wind', mov: "freezing_rain" },
    8600: { iconFile: 'SnFrzRa', textModifier: 'Ice to Snow', mov: "wintry_mix" },
    8610: { iconFile: 'SnFrzRa', textModifier: 'Ice to Snow / Wind', mov: "wintry_mix" },
    8700: { iconFile: 'Mix', textModifier: 'Wintry Mix to Snow', mov: "wintry_mix" },
    8710: { iconFile: 'Mix', textModifier: 'Wintry Mix to Snow / Wind', mov: "wintry_mix" },
    8800: { iconFile: 'Mix', textModifier: 'Snow to Wintry Mix', mov: "wintry_mix" },
    8810: { iconFile: 'Mix', textModifier: 'Snow to Wintry Mix / Wind', mov: "wintry_mix" },
    8900: { iconFile: 'Mix', textModifier: 'Wintry Mix to Rain', mov: "wintry_mix" },
    8910: { iconFile: 'Mix', textModifier: 'Wintry Mix to Rain / Wind', mov: "wintry_mix" },
    9000: { iconFile: 'NPc', textModifier: 'Clearing Late', mov: "mostly_cloudy_night" },
    9003: { iconFile: 'DPc', textModifier: 'AM Clouds / PM Sun', mov: "mostly_cloudy" },
    9010: { iconFile: 'Wnd', textModifier: 'Clearing Late / Wind', mov: "mostly_cloudy_night" },
    9013: { iconFile: 'PcWnd', textModifier: 'AM Clouds / PM Sun / Wind', mov: "windy" },
    9100: { iconFile: 'Fog', textModifier: 'Fog Early / Clearing Late', mov: "fog" },
    9103: { iconFile: 'AMFgPMSu', textModifier: 'AM Fog / PM Sun', mov: "fog" },
    9110: { iconFile: 'Fog', textModifier: 'Fog Early / Clearing Late / Wind', mov: "fog" },
    9113: { iconFile: 'AMFgPMSu', textModifier: 'AM Fog / PM Sun / Wind', mov: "fog" },
    9200: { iconFile: 'AMFgPMCl', textModifier: 'Fog Early / Clouds Late', mov: "fog" },
    9203: { iconFile: 'AMFgPMCl', textModifier: 'AM Fog / PM Clouds', mov: "fog" },
    9210: { iconFile: 'AMFgPMCl', textModifier: 'Fog Early / Clouds Late / Wind', mov: "fog" },
    9213: { iconFile: 'AMFgPMCl', textModifier: 'AM Fog / PM Clouds / Wind', mov: "fog" },
    9300: { iconFile: 'Fog', textModifier: 'Fog Late', mov: "fog" },
    9303: { iconFile: 'Fog', textModifier: 'PM Fog', mov: "fog" },
    9310: { iconFile: 'Fog', textModifier: 'Fog / Wind Late', mov: "fog" },
    9313: { iconFile: 'Fog', textModifier: 'PM Fog / Wind', mov: "fog" },
    9500: { iconFile: 'Mix', textModifier: 'Rain to Wintry Mix', mov: "wintry_mix" },
    9510: { iconFile: 'Mix', textModifier: 'Rain to Wintry Mix / Wind', mov: "wintry_mix" },
}
//  Fisher-Yates shuffle
function shuffle(array) {
    var i = 0,
        j = 0,
        temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function fadeSlideIn(div, time, delay) {
    if (delay == undefined) {
        delay = 0
    } else {
        delay = delay
    }
    setTimeout(() => {
        div.fadeIn(time)
    }, delay);
}

function fadeSlideOut(div, time, moveon, delay) {
    if (delay == undefined) {
        delay = 0
    } else {
        delay = delay
    }
    setTimeout(() => {
        div.fadeOut(time)
        if (moveon == true) {
            setTimeout(() => {
                slideCallBack()
                round = 0
            }, time);
        }
    }, delay);
}

function getIcon(div, iconCode, type, size) {
    //"large", "medium", "small", or "map"
    if (iconCode != "blank") {
        var sizepath = ""
        if (size == "large") {
            sizepath = "large/"
        } else if (size == "medium") {
            sizepath = "medium/"
        } else if (size == "small") {
            sizepath = "small/"
        } else if (sizepath == "map") {
            sizepath = "map/"
        } else if (sizepath == undefined) {
            sizepath = "large/"
        } else {
            sizepath = "large/"
        }
        if (type == "current") {
            div.css({ "background-image": "url(images/icons/" + appearanceSettings.iconSet + "/" + sizepath + codeToCurrent[iconCode].iconFile + ".apng)", "background-size": "100% 100%" })
        } else if (type == "forecast") {
            div.css({ "background-image": "url(images/icons/" + appearanceSettings.iconSet + "/" + sizepath + codetoFcst[iconCode].iconFile + ".apng)", "background-size": "100% 100%" })
        } else if (type == "ldl") {
            div.css({ "background-image": "url(images/icons/" + appearanceSettings.iconSet + "/stills/" + codeToCurrent[iconCode].iconFile + ".mv.png)", "background-size": "100% 100%" })
        }
    } else {
        div.css({ "background-image": "url(images/icons/blank.png)", "background-size": "100% 100%" })
    }
}
function getCond(iconCode, type) {
    if (type == "current") {
        return codeToCurrent[iconCode].textModifier
    } else if (type == "forecast") {
        return codetoFcst[iconCode].textModifier
    }
}
function getMapAdjustedCenters(lat, lon) {
    //REGIONAL
    //LON
    if (lon > -75) {
        locationConfig.radar.regionalCoords.lon = -75
    } else if (lon < -122) {
        locationConfig.radar.regionalCoords.lon = -117
    } else {
        locationConfig.radar.regionalCoords.lon = locationConfig.mainCity.lon
    }
    //LAT
    if (lat < 28) {
        locationConfig.radar.regionalCoords.lat = 28
    } else if (lat > 45) {
        locationConfig.radar.regionalCoords.lat = 45
    } else {
        locationConfig.radar.regionalCoords.lat = locationConfig.mainCity.lat
    }
    //LOCAL
    //LON
    if (lon > -67.9) {
        locationConfig.radar.localCoords.lon = -67.9
    } else if (lon < -124.1) {
        locationConfig.radar.localCoords.lon = -124.1
    } else {
        locationConfig.radar.localCoords.lon = locationConfig.mainCity.lon
    }
    //LAT
    if (lat < 24.559) {
        locationConfig.radar.localCoords.lat = 24.559
    } else if (lat > 49) {
        locationConfig.radar.localCoords.lat = 49
    } else {
        locationConfig.radar.localCoords.lat = locationConfig.mainCity.lat
    }
}
function adjustTimeZone(userTimeZone, locTimeZone) {
    var timezones = {
        "America/New_York": -5,
        "America/Chicago": -6,
        "Europe/London": 0
    }
    var zone = timezones[userTimeZone] - timezones[locTimeZone];
    timezoneDifference = zone;
}
function sevalertNum(warningtitle) {
    var alertstatus = {
        "Tornado Warning": 15,
        "Flash Flood Warning": 14,
        "Severe Thunderstorm Warning": 13,
        "Hurricane Warning": 12,
        "Storm Surge Warning": 11,
        "Blizzard Warning": 10,
        "Winter Storm Warning": 9,
        "Tornado Watch": 8,
        "Flash Flood Watch": 7,
        "Severe Thunderstorm Watch": 6,
        "Hurricane Local Statement": 5,
        "Severe Weather Statement": 4,
        "Flash Flood Statement": 3,
        "Hurricane Watch": 2,
        "Winter Storm Watch": 1,
    }[warningtitle]
    if (alertstatus !== undefined) {
        return alertstatus
    } else {
        return -1
    }
}
function isSevere(alertTitle) {
    if (alertTitle == "Tornado Warning" || alertTitle == "Flash Flood Warning" || alertTitle == "Severe Thunderstorm Warning") {
        return true
    } else {
        return false
    }
}
function crawlType(alertTitle) {
    if (alertTitle == "Tornado Warning" || alertTitle == "Flash Flood Warning" || alertTitle == "Severe Thunderstorm Warning" || alertTitle == "Tornado Watch") {
        return "Warning";
    } else if (alertTitle == "Severe Thunderstorm Watch") {
        return "Advisory";
    } else {
        return "Advisory";
    }
}
function metStoMPH(mps) {
    let val = mps * 2.237
    return Math.round(val)
}
function metersToMiles(meters) {
    return meters / 1609
}
function getFlowMins(speedMeters, lengthMeters) {
    return metStoMPH(speedMeters) / metersToMiles(lengthMeters)
}
function getCookie(name) {
    let cookies = decodeURIComponent(document.cookie);
    let cookiesArr = cookies.split("; ");
    for (var i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i].split("=")[0] == name) {
            //console.log(cookiesArr[i]);
            return cookiesArr[i].split("=")[1];
        }
    }
    return "";
}

function showNight(nar, i) {
    if (nar.cond.time != "_night") { return false; }
    var n = {
        "partly_cloudy": true,
        "mostly_cloudy": true,
        "isolated_thunderstorms": true
    }[nar.cond.name]
    if (n) { return n; }
    return false;
}
function getWavDurationMs(wav) {
    const { sampleRate, numChannels, bitsPerSample } = wav.fmt;
    const dataSize = wav.data.chunkSize;

    const durationMs = Math.round(
        dataSize / (sampleRate * numChannels * (bitsPerSample / 8)) * 1000
    );

    return durationMs;
}
function getAudioDuration() {
    return 0;
}

function distanceByDegrees(c1, c2) {
    var lat1 = parseFloat(c1.lat), lon1 = parseFloat(c1.lon),
        lat2 = parseFloat(c2.lat), lon2 = parseFloat(c2.lon),
        dLat = lat2 - lat1, dLon = lon2 - lon1;
    return [Math.sqrt(dLat ** 2 + dLon ** 2), dLat, dLon];
}

function centerMap(idx) {
    var lft = 720, tp = 430;
    if (regionalMapCities[idx].type == 'pacific') {
        lft = 420;
    } else if (regionalMapCities[idx].type == 'pacific north') {
        lft = 420;
        tp = 230;
    } else if (regionalMapCities[idx].type == 'south') {
        tp = 530;
    } else if (regionalMapCities[idx].type == 'atlantic south') {
        lft = 870;
        tp = 530;
    } else if (regionalMapCities[idx].type == 'atlantic') {
        lft = 1020;
    } else if (regionalMapCities[idx].type == 'atlantic north') {
        lft = 1020;
        tp = 230;
    } else if (regionalMapCities[idx].type == 'north') {
        tp = 230;
    }
    $(".map-regional").css({
        left: `${-(regionalMapCities[idx].left) + lft}px`,
        top: `${-(regionalMapCities[idx].top) + tp}px`
    });
    $(".map-cities").css({
        left: `${-(regionalMapCities[idx].left) + lft}px`,
        top: `${-(regionalMapCities[idx].top) + tp}px`
    });
}

//REGIONAL MAP CITIES
var regionalMapCities = [
    { name: "Philadelphia", lat: 39.953, lon: -75.167, left: 3785, top: -77 },
    { name: "New York", lat: 40.713, lon: -74.006, left: 4112, top: -210 },
    { name: "Atlantic City", type: "atlantic", lat: 39.364, lon: -74.423, left: 4096, top: 0 },
    { name: "Millinocket", type: "atlantic north", lat: 45.657, lon: -68.709, left: 4880, top: -1080 },
    { name: "Montreal", type: "north", lat: 45.503, lon: -73.573, left: 4074, top: -1067 },
    { name: "Sherbrooke", type: "north", lat: 45.401, lon: -71.89, left: 4352, top: -1053 },
    { name: "Rangeley", lat: 44.965, lon: -70.642, left: 4564, top: -851 },
    { name: "Massena", lat: 44.932, lon: -74.893, left: 3864, top: -822 },
    { name: "Burlington", lat: 44.476, lon: -73.214, left: 4182, top: -725 },
    { name: "Boston", type: "atlantic", lat: 42.359, lon: -71.057, left: 4568, top: -427 },
    { name: "Albany", lat: 42.65, lon: -73.753, left: 4005, top: -504 },
    { name: "Scranton", lat: 41.409, lon: -75.665, left: 3804, top: -296 },
    { name: "Rochester", lat: 43.156, lon: -77.613, left: 3675, top: -557 },
    { name: "Buffalo", lat: 42.887, lon: -78.879, left: 3325, top: -515, exclude: "Scranton" },
    { name: "Chattanooga", lat: 35.046, lon: -85.308, left: 2320, top: 700 },
    { name: "Columbia", lat: 34.001, lon: -81.034, left: 2971, top: 885 },
    { name: "Charleston", lat: 38.352, lon: -81.634, left: 2934, top: 222 },
    { name: "Atlanta", lat: 33.751, lon: -84.39, left: 2519, top: 911 },
    { name: "Macon", lat: 32.838, lon: -83.628, left: 2638, top: 1137 },
    { name: "Montgomery", lat: 32.367, lon: -86.302, left: 2142, top: 1176 },
    { name: "Birmingham", lat: 33.522, lon: -86.809, left: 2100, top: 954 },
    { name: "Quillayute", type: "pacific", lat: 47.943, lon: -124.541, left: -3520, top: -1480 },
    { name: "Bellingham", type: "pacific north", lat: 48.75, lon: -122.48, left: -3210, top: -1611, exclude: "Moscow" },
    { name: "Seattle", type: "pacific", lat: 47.603, lon: -122.33, left: -3212, top: -1408, exclude: "Moscow" },
    { name: "Astoria", type: "pacific", lat: 46.189, lon: -123.833, left: -3457, top: -1129 },
    { name: "Portland", type: "pacific", lat: 45.515, lon: -122.678, left: -3180, top: -1058 },
    { name: "Yakima", lat: 46.602, lon: -120.506, left: -2969, top: -1242, exclude: "Moscow" },
    { name: "Ephrata", lat: 47.322, lon: -119.551, left: -2808, top: -1389 },
    { name: "Omak", lat: 48.411, lon: -119.528, left: -2785, top: -1595 },
    { name: "Pendleton", lat: 45.672, lon: -118.787, left: -2752, top: -1047 },
    { name: "Eugene", type: "pacific", lat: 44.051, lon: -123.092, left: -3328, top: -777 },
    { name: "Redmond", lat: 44.273, lon: -121.173, left: -3040, top: -790 },
    { name: "Burns", lat: 43.589, lon: -119.057, left: -2683, top: -695 },
    { name: "Rome", lat: 45.463, lon: 8.72, left: -2545, top: -475 },
    { name: "Medford", lat: 42.326, lon: -122.874, left: -3159, top: -459 },
    { name: "Spokane", lat: 47.659, lon: -117.425, left: -2511, top: -1376 },
    { name: "Moscow", lat: 46.732, lon: -117, left: -2270, top: -1204, exclude: "Great Falls" },
    { name: "Sandpoint", lat: 48.275, lon: -116.548, left: -2448, top: -1565 },
    { name: "Redding", lat: 40.588, lon: -122.392, left: -3147, top: -180 },
    { name: "Ukiah", type: "pacific", lat: 39.15, lon: -123.208, left: -3370, top: 48 },
    { name: "Sacramento", lat: 38.581, lon: -121.494, left: -3080, top: 90 },
    { name: "San Francisco", type: "pacific", lat: 37.779, lon: -122.419, left: -3235, top: 274 },
    { name: "Modesto", lat: 37.641, lon: -121, left: -2851, top: 281 },
    { name: "Fresno", lat: 36.736, lon: -119.787, left: -2684, top: 475 },
    { name: "Monterey", type: "pacific", lat: 36.6, lon: -121.896, left: -3050, top: 480 },
    { name: "Bakersfield", type: "pacific", lat: 35.374, lon: -119.019, left: -2828, top: 680 },
    { name: "Barstow", lat: 34.899, lon: -117.024, left: -2443, top: 689 },
    { name: "Los Angeles", type: "pacific", lat: 34.048, lon: -118.254, left: -2619, top: 904 },
    { name: "Palm Springs", lat: 33.823, lon: -116.546, left: -2283, top: 894 },
    { name: "San Diego", type: "pacific", lat: 32.714, lon: -117.16, left: -2321, top: 1116 },
    { name: "Needles", lat: 34.84, lon: -114.607, left: -2055, top: 757 },
    { name: "Las Vegas", lat: 36.169, lon: -115.141, left: -2217, top: 556 },
    { name: "Tonopah", lat: 38.067, lon: -117.23, left: -2355, top: 250 },
    { name: "Reno", lat: 39.526, lon: -119.813, left: -2668, top: 75 },
    { name: "Ely", lat: 39.248, lon: -114.893, left: -2070, top: 91 },
    { name: "Elko", lat: 40.833, lon: -115.763, left: -2170, top: -230 },
    { name: "Winnemucca", lat: 40.973, lon: -117.736, left: -2619, top: -220 },
    { name: "Yuma", lat: 32.692, lon: -114.629, left: -2021, top: 1091 },
    { name: "Phoenix", lat: 33.448, lon: -112.075, left: -1705, top: 879, exclude: "Truth or Conseq." },
    { name: "Flagstaff", lat: 35.198, lon: -111.651, left: -1672, top: 640 },
    { name: "Page", lat: 36.919, lon: -111.46, left: -1640, top: 440 },
    { name: "St. Johns", lat: 52.188, lon: -2.235, left: -1313, top: 732 },
    { name: "Tucson", lat: 32.221, lon: -110.973, left: -1480, top: 1120 },
    { name: "Douglas", lat: 31.344, lon: -109.555, left: -1277, top: 1315 },
    { name: "Cedar City", lat: 37.677, lon: -113.062, left: -1800, top: 273 },
    { name: "Moab", lat: 38.573, lon: -109.551, left: -1380, top: 260 },
    { name: "Price", lat: 39.601, lon: -110.809, left: -1440, top: 0 },
    { name: "Salt Lake City", lat: 40.763, lon: -111.89, left: -1621, top: -293 },
    { name: "Pocatello", lat: 42.867, lon: -112.444, left: -1776, top: -517 },
    { name: "Twin Falls", lat: 42.57, lon: -114.46, left: -2105, top: -420 },
    { name: "Boise", lat: 43.615, lon: -116.202, left: -2225, top: -630 },
    { name: "McCall", lat: 44.91, lon: -116.098, left: -2301, top: -869 },
    { name: "Challis", lat: 44.505, lon: -114.232, left: -1984, top: -806 },
    { name: "Grangeville", lat: 45.926, lon: -116.122, left: -2163, top: -1010, exclude: "W Yellowstone" },
    { name: "Missoula", lat: 46.872, lon: -113.994, left: -2025, top: -1269 },
    { name: "Jackson", lat: 35.614, lon: -88.819, left: -1454, top: -595 },
    { name: "W Yellowstone", lat: 44.661, lon: -111.1, left: -1498, top: -826 },
    { name: "Kalispell", lat: 48.197, lon: -114.313, left: -2000, top: -1491 },
    { name: "Great Falls", lat: 47.506, lon: -111.299, left: -1626, top: -1459 },
    { name: "Helena", lat: 46.589, lon: -112.039, left: -1646, top: -1255, exclude: "Billings" },
    { name: "Butte", lat: 46.013, lon: -112.538, left: -1744, top: -1066 },
    { name: "Bozeman", lat: 45.679, lon: -111.036, left: -1440, top: -1000 },
    { name: "Lewistown", lat: 47.065, lon: -109.427, left: -1268, top: -1268 },
    { name: "Billings", lat: 45.784, lon: -108.505, left: -1072, top: -1017 },
    { name: "Havre", lat: 48.553, lon: -109.677, left: -1271, top: -1523 },
    { name: "Glasgow", lat: 48.195, lon: -106.638, left: -913, top: -1470 },
    { name: "Miles City", lat: 46.408, lon: -105.846, left: -686, top: -1104 },
    { name: "Glendive", lat: 47.105, lon: -104.715, left: -588, top: -1309 },
    { name: "Worland", lat: 44.017, lon: -107.956, left: -1055, top: -716 },
    { name: "Lander", lat: 42.833, lon: -108.729, left: -1090, top: -504 },
    { name: "Casper", lat: 42.85, lon: -106.325, left: -748, top: -493 },
    { name: "Rock Springs", lat: 41.586, lon: -109.221, left: -1191, top: -281 },
    { name: "Cheyenne", lat: 41.135, lon: -104.82, left: -638, top: -283 },
    { name: "Gilette", lat: 44.291, lon: -105.503, left: -610, top: -800 },
    { name: "Denver", lat: 39.742, lon: -104.986, left: -632, top: -82 },
    { name: "Craig", lat: 40.514, lon: -107.547, left: -920, top: -100 },
    { name: "Akron", lat: 40.159, lon: -103.213, left: -324, top: -87 },
    { name: "Grand Junction", lat: 39.068, lon: -108.564, left: -1146, top: 94 },
    { name: "Colorado Springs", lat: 38.832, lon: -104.822, left: -734, top: 111, exclude: "Goodland" },
    { name: "Pueblo", lat: 38.271, lon: -104.61, left: -475, top: 299 },
    { name: "Alamosa", lat: 37.468, lon: -105.865, left: -783, top: 400 },
    { name: "Durango", lat: 37.273, lon: -107.881, left: -1050, top: 299 },
    { name: "Farmington", lat: 36.728, lon: -108.206, left: -1100, top: 528 },
    { name: "Santa Fe", lat: 35.688, lon: -105.939, left: -724, top: 635 },
    { name: "Albuquerque", lat: 35.088, lon: -106.651, left: -964, top: 725 },
    { name: "Clovis", lat: 34.405, lon: -103.205, left: -472, top: 711 },
    { name: "Truth or Conseq.", lat: 33.129, lon: -107.256, left: -1050, top: 925, exclude: "Odessa" },
    { name: "Roswell", lat: 33.396, lon: -104.523, left: -568, top: 865 },
    { name: "Cloudcroft", lat: 32.958, lon: -105.745, left: -752, top: 1029 },
    { name: "Odessa", lat: 31.847, lon: -102.369, left: -365, top: 1180 },
    { name: "El Paso", lat: 31.76, lon: -106.485, left: -734, top: 1248 },
    { name: "Ft. Stockton", lat: 30.885, lon: -102.879, left: -300, top: 1386 },
    { name: "Del Rio", lat: 29.357, lon: -100.899, left: 68, top: 1529 },
    { name: "San Angelo", lat: 31.463, lon: -100.437, left: 187, top: 1256 },
    { name: "Lubbock", lat: 33.621, lon: -101.889, left: -130, top: 857 },
    { name: "Midland", lat: 31.997, lon: -102.078, left: -99, top: 1150 },
    { name: "Laredo", lat: 27.503, lon: -99.508, left: 178, top: 1753 },
    { name: "Monterrey", lat: 25.681, lon: -100.314, left: 125, top: 1968 },
    { name: "Monclova", lat: 26.901, lon: -101.416, left: -224, top: 1776 },
    { name: "Corpus Christi", lat: 27.764, lon: -97.403, left: 552, top: 1736, exclude: "Lake Charles" },
    { name: "Brownsville", type: 'atlantic south', lat: 25.901, lon: -97.498, left: 572, top: 1996 },
    { name: "Houston", lat: 29.76, lon: -95.363, left: 835, top: 1475 },
    { name: "San Antonio", lat: 29.425, lon: -98.491, left: 463, top: 1488 },
    { name: "Dallas", lat: 32.781, lon: -96.8, left: 692, top: 1033 },
    { name: "Waco", lat: 31.549, lon: -97.147, left: 561, top: 1220 },
    { name: "Lufkin", lat: 31.339, lon: -94.729, left: 872, top: 1212 },
    { name: "Wichita Falls", lat: 33.9, lon: -98.502, left: 283, top: 894 },
    { name: "Dalhart", lat: 36.062, lon: -102.522, left: -195, top: 480 },
    { name: "Amarillo", lat: 35.207, lon: -101.836, left: -41, top: 679 },
    { name: "Gage", lat: 36.32, lon: -99.756, left: 161, top: 521 },
    { name: "Oklahoma City", lat: 35.469, lon: -97.518, left: 516, top: 684 },
    { name: "Tulsa", lat: 36.153, lon: -95.989, left: 834, top: 508 },
    { name: "Fort Smith", lat: 35.387, lon: -94.425, left: 950, top: 764 },
    { name: "Wichita", lat: 37.693, lon: -97.338, left: 414, top: 320 },
    { name: "Chanute", lat: 37.683, lon: -95.452, left: 767, top: 283 },
    { name: "Kansas City", lat: 39.098, lon: -94.579, left: 891, top: 35 },
    { name: "Concordia", lat: 39.572, lon: -97.659, left: 600, top: 1 },
    { name: "Hill City", lat: 39.367, lon: -99.842, left: 310, top: 0 },
    { name: "Garden City", lat: 37.968, lon: -100.875, left: 0, top: 293 },
    { name: "Goodland", lat: 39.351, lon: -101.71, left: -70, top: 70 },
    { name: "McCook", lat: 40.201, lon: -100.626, left: 52, top: -115 },
    { name: "Grand Island", lat: 40.925, lon: -98.339, left: 311, top: -248 },
    { name: "Omaha", lat: 41.257, lon: -95.941, left: 747, top: -264 },
    { name: "Scottsbluff", lat: 41.866, lon: -103.663, left: -329, top: -301 },
    { name: "Chadron", lat: 42.829, lon: -103.001, left: -293, top: -510 },
    { name: "Valentine", lat: 42.876, lon: -100.551, left: -17, top: -535 },
    { name: "North Platte", lat: 41.124, lon: -100.764, left: 14, top: -320 },
    { name: "Norfolk", lat: 42.033, lon: -97.412, left: 304, top: -483 },
    { name: "Rapid City", lat: 44.08, lon: -103.227, left: -300, top: -796 },
    { name: "Pierre", lat: 44.368, lon: -100.352, left: 50, top: -800 },
    { name: "Sioux Falls", lat: 43.546, lon: -96.727, left: 538, top: -689 },
    { name: "Buffalo", lat: 36.159, lon: -115.237, left: -363, top: -1007 },
    { name: "Mobridge", lat: 45.535, lon: -100.434, left: 23, top: -1004 },
    { name: "Aberdeen", lat: 45.462, lon: -98.487, left: 401, top: -969 },
    { name: "Bismarck", lat: 46.808, lon: -100.785, left: 31, top: -1253 },
    { name: "Dickinson", lat: 46.879, lon: -102.787, left: -300, top: -1234 },
    { name: "Williston", lat: 48.147, lon: -103.622, left: -365, top: -1470 },
    { name: "Minot", lat: 48.234, lon: -101.293, left: 0, top: -1470 },
    { name: "Grand Forks", lat: 47.924, lon: -97.032, left: 605, top: -1430 },
    { name: "Fargo", lat: 46.877, lon: -96.788, left: 675, top: -1203 },
    { name: "Bemidji", lat: 47.473, lon: -94.883, left: 941, top: -1362 },
    { name: "Alexandria", lat: 45.886, lon: -95.378, left: 815, top: -1044 },
    { name: "Minneapolis", lat: 44.976, lon: -93.266, left: 1136, top: -914 },
    { name: "Redwood Falls", lat: 44.54, lon: -95.118, left: 850, top: -726 },
    { name: "Rochester", lat: 44.022, lon: -92.463, left: 1319, top: -667 },
    { name: "Duluth", lat: 46.772, lon: -92.126, left: 1391, top: -1203 },
    { name: "Hibbing", lat: 47.428, lon: -92.937, left: 1231, top: -1395 },
    { name: "Grand Marais", lat: 47.751, lon: -90.333, left: 1575, top: -1420 },
    { name: "Houghton", lat: 47.121, lon: -88.569, left: 1903, top: -1280 },
    { name: "Marquette", lat: 46.544, lon: -87.395, left: 2143, top: -1105 },
    { name: "Sault Ste. Marie", lat: 46.492, lon: -84.359, left: 2460, top: -1136 },
    { name: "Rhinelander", lat: 45.638, lon: -89.411, left: 1622, top: -1051 },
    { name: "Eau Claire", lat: 44.811, lon: -91.498, left: 1473, top: -825 },
    { name: "Green Bay", lat: 44.513, lon: -88.013, left: 1955, top: -874 },
    { name: "Madison", lat: 43.073, lon: -89.382, left: 1654, top: -600 },
    { name: "Milwaukee", lat: 43.039, lon: -87.907, left: 1972, top: -622 },
    { name: "Alpena", lat: 45.062, lon: -83.433, left: 2617, top: -896 },
    { name: "Cadillac", lat: 44.25, lon: -85.399, left: 2350, top: -750 },
    { name: "Flint", lat: 43.013, lon: -83.688, left: 2658, top: -677 },
    { name: "Grand Rapids", lat: 42.966, lon: -85.67, left: 2303, top: -497 },
    { name: "Detroit", lat: 42.331, lon: -83.046, left: 2679, top: -447 },
    { name: "Toledo", lat: 41.655, lon: -83.536, left: 2590, top: -289 },
    { name: "Ft. Wayne", lat: 41.08, lon: -85.138, left: 2288, top: -274 },
    { name: "Indianapolis", lat: 39.769, lon: -86.162, left: 2179, top: -31 },
    { name: "Chicago", lat: 41.882, lon: -87.632, left: 1984, top: -391, exclude: "Detroit" },
    { name: "Moline", lat: 41.506, lon: -90.514, left: 1665, top: -328 },
    { name: "Kirksville", lat: 40.195, lon: -92.582, left: 1343, top: -95 },
    { name: "Waterloo", lat: 42.498, lon: -92.334, left: 1356, top: -519 },
    { name: "Des Moines", lat: 41.585, lon: -93.624, left: 1089, top: -317 },
    { name: "Columbia", lat: 38.952, lon: -92.329, left: 1258, top: 97 },
    { name: "St. Louis", lat: 38.627, lon: -90.198, left: 1575, top: 143, exclude: "Indianapolis" },
    { name: "Springfield", lat: 37.209, lon: -93.292, left: 1155, top: 384 },
    { name: "Van Buren", lat: 36.996, lon: -91.015, left: 1500, top: 360 },
    { name: "Springfield", lat: 39.799, lon: -89.649, left: 1699, top: -105 },
    { name: "Effingham", lat: 39.121, lon: -88.541, left: 1895, top: 116, exclude: "Cincinnati" },
    { name: "Jonesboro", lat: 35.829, lon: -90.695, left: 1413, top: 547 },
    { name: "Harrison", lat: 36.229, lon: -93.107, left: 1153, top: 583 },
    { name: "Little Rock", lat: 34.746, lon: -92.273, left: 1290, top: 782 },
    { name: "Texarkana", lat: 33.426, lon: -94.044, left: 1057, top: 957 },
    { name: "Shreveport", lat: 32.516, lon: -93.732, left: 1145, top: 1141 },
    { name: "Alexandria", lat: 31.309, lon: -92.446, left: 1211, top: 1320 },
    { name: "Lake Charles", lat: 30.206, lon: -93.205, left: 1141, top: 1504 },
    { name: "New Orleans", type: "south", lat: 29.976, lon: -90.078, left: 1550, top: 1550, exclude: "Montgomery" },
    { name: "Gulfport", type: "south", lat: 30.404, lon: -89.093, left: 1836, top: 1350 },
    { name: "Meridian", lat: 32.365, lon: -88.7, left: 1850, top: 1146 },
    { name: "McComb", lat: 31.244, lon: -90.454, left: 1539, top: 1345 },
    { name: "Jackson", lat: 32.3, lon: -90.184, left: 1576, top: 1148 },
    { name: "Greenwood", lat: 33.519, lon: -90.184, left: 1548, top: 954 },
    { name: "Memphis", lat: 35.15, lon: -90.05, left: 1642, top: 751 },
    { name: "Paducah", lat: 37.085, lon: -88.599, left: 1813, top: 397, exclude: "Lexington" },
    { name: "Louisville", lat: 38.253, lon: -85.759, left: 2205, top: 257 },
    { name: "Nashville", lat: 36.165, lon: -86.781, left: 2146, top: 492, exclude: "Knoxville" },
    { name: "Huntsville", lat: 34.73, lon: -86.585, left: 1969, top: 745 },
    { name: "Knoxville", lat: 35.962, lon: -83.916, left: 2538, top: 579 },
    { name: "London", lat: 37.128, lon: -84.083, left: 2734, top: 448, exclude: "Chattanooga" },
    { name: "Lexington", lat: 38.046, lon: -84.498, left: 2499, top: 276 },
    { name: "Cincinnati", lat: 39.102, lon: -84.513, left: 2549, top: 84 },
    { name: "Columbus", lat: 39.962, lon: -83.001, left: 2708, top: -65 },
    { name: "Cleveland", lat: 41.501, lon: -81.69, left: 2908, top: -251 },
    { name: "Savannah", lat: 32.081, lon: -81.093, left: 2964, top: 1263 },
    { name: "Panama City", lat: 30.155, lon: -85.66, left: 2292, top: 1390, exclude: "Jacksonville" },
    { name: "Tallahassee", type: "south", lat: 30.438, lon: -84.281, left: 2576, top: 1455 },
    { name: "Jacksonville", type: "atlantic", lat: 30.326, lon: -81.655, left: 2914, top: 1490 },
    { name: "Orlando", lat: 28.542, lon: -81.379, left: 2958, top: 1701 },
    { name: "Tampa", lat: 27.948, lon: -82.457, left: 2706, top: 1757 },
    { name: "Fort Myers", lat: 26.642, lon: -81.872, left: 2824, top: 1984 },
    { name: "Key West", type: "south", lat: 24.558, lon: -81.807, left: 2917, top: 2211 },
    { name: "Miami", type: "atlantic south", lat: 25.773, lon: -80.192, left: 3143, top: 2022 },
    { name: "W Palm Beach", lat: 26.714, lon: -80.055, left: 3199, top: 1859 },
    { name: "Charleston", lat: 32.789, lon: -79.939, left: 3131, top: 1086 },
    { name: "Charlotte", lat: 35.227, lon: -80.843, left: 2975, top: 688 },
    { name: "Wilmington", lat: 34.225, lon: -77.945, left: 3436, top: 835 },
    { name: "Cape Hatteras", lat: 35.408, lon: -75.487, left: 3717, top: 717 },
    { name: "Norfolk", lat: 36.848, lon: -76.293, left: 3730, top: 475 },
    { name: "Richmond", lat: 37.536, lon: -77.435, left: 3446, top: 235 },
    { name: "Roanoke", lat: 37.272, lon: -79.941, left: 3108, top: 366 },
    { name: "Washington", lat: 38.903, lon: -77.039, left: 3574, top: 45 },
    { name: "Salisbury", lat: 38.367, lon: -75.6, left: 3790, top: 244 },
    { name: "Elkins", lat: 38.925, lon: -79.846, left: 3156, top: 67 },
    { name: "Pittsburgh", lat: 40.439, lon: -79.997, left: 3176, top: -140 },
    { name: "Toronto", lat: 43.648, lon: -79.384, left: 3209, top: -716 },
    { name: "Hartford", lat: 41.764, lon: -72.676, left: 4251, top: -343 },
    { name: "Bennington", lat: 42.878, lon: -73.197, left: 4260, top: -540 },
    { name: "Portland", type: "atlantic", lat: 43.656, lon: -70.253, left: 4596, top: -638 },
    { name: "Bangor", type: "atlantic", lat: 44.802, lon: -68.771, left: 4874, top: -883 },
    { name: "Raleigh", lat: 35.78, lon: -78.638, left: 3396, top: 576 },
    { name: "Sioux City", lat: 42.474, lon: -96.414, left: 744, top: -448 },
    { name: "Abilene", lat: 32.446, lon: -99.748, left: 232, top: 1077 },
    { name: "London", lat: 42.985, lon: -81.25, left: 3000, top: -555 },
    { name: "Erie", lat: 42.129, lon: -80.085, left: 3205, top: -340 },
    { name: "Peterborough", type: "north", lat: 44.306, lon: -78.32, left: 3510, top: -750 },
    { name: "State College", lat: 40.793, lon: -77.86, left: 3475, top: -170, exclude: "Atlantic City" }
]

function displayOnCrawl(alert){
    var alt = {"TOR":true}[alert];
    if(alt != true) return false;
    return alt;
}

var slideFlavors = {
    "60sec": [
        {
            flavor: '60',
            bulletin: false,
            precip: false,
            order: [
                {function:"currentConditions",slideDelay:7500},
                {function:"mapCurrent",slideDelay:7500},
                {function:"radarDoppler",slideDelay:7500},
                {function:"almanac",slideDelay:7500},
                {function:"localForecast",slides:3,slideDelay:7500},
                {function:"weekAhead",slideDelay:7500},
            ]
        },
        {
            flavor: '60',
            bulletin: true,
            precip: false,
            order: [
                {function:"bulletin",slideDelay:7500},
                {function:"currentConditions",slideDelay:7500},
                {function:"mapCurrent",slideDelay:7500},
                {function:"radarDoppler",slideDelay:7500},
                {function:"localForecast",slides:3,slideDelay:7500},
                {function:"weekAhead",slideDelay:7500},
            ]
        },
        {
            flavor: '60',
            bulletin: false,
            precip: true,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"localDoppler",slideDelay:12000},
                {function:"localForecast",slides:3,slideDelay:8000},
                {function:"weekAhead",slideDelay:8000},
            ]
        },
        {
            flavor: '60',
            bulletin: true,
            precip: true,
            order: [
                {function:"bulletin",slideDelay:7000},
                {function:"currentConditions",slideDelay:7000},
                {function:"radarDoppler",slideDelay:7000},
                {function:"localDoppler",slideDelay:11000},
                {function:"localForecast",slides:3,slideDelay:7000},
                {function:"weekAhead",slideDelay:7000},
            ]
        },
        //unfinished
    ],
    "90sec": [
        {
            flavor: '90',
            bulletin: false,
            precip: false,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"mapCurrent",slideDelay:8000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"almanac",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:2,slideDelay:8000},
                {function:"localForecast",slides:4,slideDelay:7500},
                {function:"weekAhead",slideDelay:12000}
            ]
        },
        {
            flavor: '90',
            bulletin: true,
            precip: false,
            order: [
                {function:"bulletin",slideDelay:8000},
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slideDelay:8000},
                {function:"localForecast",slides:4,slideDelay:7500},
                {function:"weekAhead",slideDelay:8000}
            ]
        },
        {
            flavor: '90',
            bulletin: false,
            precip: true,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"localDoppler",slideDelay:12000},
                {function:"almanac",slideDelay:8000},
                {function:"mapForecast",slideDelay:8000},
                {function:"localForecast",slides:3,slideDelay:8666},
                {function:"weekAhead",slideDelay:8000}

            ]
        },
        {
            flavor: '90',
            bulletin: true,
            precip: true,
            order: [
                {function:"bulletin",slideDelay:8000},
                {function:"currentConditions",slideDelay:8000},
                {function:"mapCurrent",slideDelay:8000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"localDoppler",slideDelay:12000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"localForecast",slides:4,slideDelay:7500},
                {function:"weekAhead",slideDelay:8000}
            ]
        }
        //unfinished
    ],
    "120sec": [
        {
            flavor: '120',
            bulletin: false,
            precip: false,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"mapCurrent",slideDelay:8000},
                {function:"radarDoppler",slideDelay:8000},
                //{function:"radarSatellite",slideDelay:8000},
                {function:"almanac",slideDelay:8000},
                {function:"airQuality",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:2,slideDelay:7000},
                {function:"localForecast",slides:4,slideDelay:7500},
                {function:"weekAhead",slideDelay:8000},
            ]
        },
        {
            flavor: '120',
            bulletin: false,
            precip: false,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"mapCurrent",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"almanac",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:2,slideDelay:7000},
                {function:"localForecast",slides:3,slideDelay:10000},
                {function:"weekAhead",slideDelay:8000},
            ]
        },
        {
            flavor: '120',
            bulletin: true,
            precip: false,
            order: [
                {function:"bulletin",slideDelay:8000},
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"radarSatellite",slideDelay:8000},
                {function:"almanac",slideDelay:8000},
                {function:"airQuality",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:2,slideDelay:7000},
                {function:"localForecast",slides:4,slideDelay:7500},
                {function:"weekAhead",slideDelay:8000},
            ]
        },
        {
            flavor: '120',
            bulletin: false,
            precip: true,
            order: [
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"localDoppler",slideDelay:12000},
                {function:"almanac",slideDelay:8000},
                {function:"airQuality",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:2,slideDelay:8000},
                {function:"localForecast",slides:4,slideDelay:8000},
                {function:"weekAhead",slideDelay:8000},
            ]
        },
        {
            flavor: '120',
            bulletin: true,
            precip: true,
            order: [
                {function:"bulletin",slideDelay:8000},
                {function:"currentConditions",slideDelay:8000},
                {function:"nearbyCities",slides:2,slideDelay:6000},
                {function:"radarDoppler",slideDelay:8000},
                {function:"localDoppler",slideDelay:12000},
                {function:"almanac",slideDelay:8000},
                {function:"airQuality",slideDelay:8000},
                {function:"daypartForecast",slideDelay:8000},
                {function:"mapForecast",slides:1,slideDelay:8000},
                {function:"localForecast",slides:4,slideDelay:8000},
                {function:"weekAhead",slideDelay:8000},
            ]
        }
        //more to come
    ]
}