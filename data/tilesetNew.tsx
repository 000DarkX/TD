<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.3" name="tilesetNew" tilewidth="32" tileheight="32" tilecount="40" columns="0">
 <editorsettings>
  <export target="tilesetNew.json" format="json"/>
 </editorsettings>
 <grid orientation="orthogonal" width="1" height="1"/>
 <terraintypes>
  <terrain name="Path" tile="0"/>
  <terrain name="Build" tile="1"/>
  <terrain name="Solid" tile="14"/>
  <terrain name="Build" tile="15"/>
  <terrain name="Path" tile="16"/>
  <terrain name="Path" tile="17"/>
  <terrain name="Path" tile="18"/>
  <terrain name="Build" tile="19"/>
  <terrain name="Path" tile="20"/>
  <terrain name="Water" tile="21"/>
 </terraintypes>
 <tile id="0">
  <image width="32" height="32" source="../assets/all.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="path" x="0.145191" y="0.145191" width="31.7241" height="31.7241"/>
  </objectgroup>
 </tile>
 <tile id="1" terrain="0,0,0,0">
  <image width="32" height="32" source="../assets/grass.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="build" x="15.4628" y="15.971"/>
  </objectgroup>
 </tile>
 <tile id="14" terrain="0,0,0,0">
  <image width="32" height="32" source="../assets/darkness.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="solid" x="16.0436" y="15.7532"/>
  </objectgroup>
 </tile>
 <tile id="15" terrain="0,0,1,1">
  <image width="32" height="32" source="../assets/tallgrass.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="build" x="16.1887" y="16.4791"/>
  </objectgroup>
 </tile>
 <tile id="16" terrain="0,0,0,0">
  <image width="32" height="32" source="../assets/bridgeTile1.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="path" x="16.1887" y="16.6969"/>
  </objectgroup>
 </tile>
 <tile id="17" terrain="0,0,0,0">
  <image width="32" height="32" source="../assets/bridgeTile2.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="path" x="16.9873" y="16.1162"/>
  </objectgroup>
 </tile>
 <tile id="18" terrain="0,,0,">
  <image width="32" height="32" source="../assets/dirt.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="path" x="16.9873" y="16.5517"/>
  </objectgroup>
 </tile>
 <tile id="19">
  <image width="32" height="32" source="../assets/grass2.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="build" x="16.3339" y="15.8984"/>
  </objectgroup>
 </tile>
 <tile id="20">
  <image width="32" height="32" source="../assets/stonePath.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="path" x="16.2613" y="16.4065"/>
  </objectgroup>
 </tile>
 <tile id="21" terrain=",,8,">
  <image width="32" height="32" source="../assets/watertile.png"/>
  <objectgroup draworder="index" id="2">
   <object id="1" name="water" x="15.245" y="15.8258"/>
   <object id="2" x="20.8348" y="-10.5989" width="0.145191"/>
  </objectgroup>
 </tile>
 <tile id="22">
  <image width="32" height="32" source="../assets/bluehelperE.png"/>
 </tile>
 <tile id="23">
  <image width="32" height="32" source="../assets/bluehelperEW.png"/>
 </tile>
 <tile id="24">
  <image width="32" height="32" source="../assets/bluehelperN.png"/>
 </tile>
 <tile id="25">
  <image width="32" height="32" source="../assets/bluehelperNS.png"/>
 </tile>
 <tile id="26">
  <image width="32" height="32" source="../assets/bluehelperS.png"/>
 </tile>
 <tile id="27">
  <image width="32" height="32" source="../assets/bluehelperW.png"/>
 </tile>
 <tile id="28">
  <image width="32" height="32" source="../assets/redhelperE.png"/>
 </tile>
 <tile id="29">
  <image width="32" height="32" source="../assets/redhelperN.png"/>
 </tile>
 <tile id="30">
  <image width="32" height="32" source="../assets/redhelperNS.png"/>
 </tile>
 <tile id="31">
  <image width="32" height="32" source="../assets/redhelperS.png"/>
 </tile>
 <tile id="32">
  <image width="32" height="32" source="../assets/redhelperW.png"/>
 </tile>
 <tile id="33">
  <image width="32" height="32" source="../assets/redhelperWE.png"/>
 </tile>
 <tile id="34">
  <image width="32" height="32" source="../assets/teamblue.png"/>
 </tile>
 <tile id="35" terrain=",,,0">
  <image width="32" height="32" source="../assets/teamred.png"/>
 </tile>
 <tile id="36">
  <image width="32" height="32" source="../assets/barbed.png"/>
 </tile>
 <tile id="37" terrain="0,,,">
  <image width="32" height="32" source="../assets/bk.png"/>
 </tile>
 <tile id="38">
  <image width="32" height="32" source="../assets/eye.png"/>
 </tile>
 <tile id="39">
  <image width="32" height="32" source="../assets/heart.png"/>
 </tile>
 <tile id="40">
  <image width="32" height="32" source="../assets/nature.png"/>
 </tile>
 <tile id="41">
  <image width="32" height="32" source="../assets/rainbow.png"/>
 </tile>
 <tile id="42">
  <image width="32" height="32" source="../assets/rock.png"/>
 </tile>
 <tile id="43">
  <image width="32" height="32" source="../assets/snow.png"/>
 </tile>
 <tile id="44">
  <image width="32" height="32" source="../assets/star.png"/>
 </tile>
 <tile id="45">
  <image width="32" height="32" source="../assets/support.png"/>
 </tile>
 <tile id="46">
  <image width="32" height="32" source="../assets/tech.png"/>
 </tile>
 <tile id="47">
  <image width="32" height="32" source="../assets/undead.png"/>
 </tile>
 <tile id="48">
  <image width="32" height="32" source="../assets/wind.png"/>
 </tile>
 <tile id="49">
  <image width="32" height="32" source="../assets/lightning.png"/>
 </tile>
 <tile id="50">
  <image width="32" height="32" source="../assets/light.png"/>
 </tile>
 <tile id="51">
  <image width="32" height="32" source="../assets/hydro.png"/>
 </tile>
</tileset>
