var gdjs;(function(t){t.PixiFiltersTools.registerFilterCreator("OldFilm",{makePIXIFilter:function(i,n){const e=new PIXI.filters.OldFilmFilter;return e._animationTimer=0,e},updatePreRender:function(i,n){i.animationFrequency!==0&&(i._animationTimer+=n.getElapsedTime()/1e3,i._animationTimer>=1/i.animationFrequency&&(i.seed=Math.random(),i._animationTimer=0))},updateDoubleParameter:function(i,n,e){n==="sepia"?i.sepia=e:n==="noise"?i.noise=e:n==="noiseSize"?i.noiseSize=e:n==="scratch"?i.scratch=e:n==="scratchDensity"?i.scratchDensity=e:n==="scratchWidth"?i.scratchWidth=e:n==="vignetting"?i.vignetting=e:n==="vignettingAlpha"?i.vignettingAlpha=e:n==="vignettingBlur"?i.vignettingBlur=e:n==="animationFrequency"&&(i.animationFrequency=e)},updateStringParameter:function(i,n,e){},updateBooleanParameter:function(i,n,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=old-film-pixi-filter.js.map
