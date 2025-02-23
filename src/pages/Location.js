import React, { useEffect, useRef } from 'react';
import './Location.css';
import LocationImage from '../images/location6.png';

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=dedef2875ca3636552d730d5a38565c8&autoload=false`;
      script.async = true;

      script.onload = () => {
        window.kakao.maps.load(() => {
          try {
            const container = mapRef.current;
            const markerPosition = new window.kakao.maps.LatLng(37.493990, 127.028527);
            
            const map = new window.kakao.maps.Map(container, {
              center: markerPosition,
              level: 4  // 줌 레벨을 2로 조정하여 더 가깝게 보이도록 함
            });
            
            const marker = new window.kakao.maps.Marker({
              position: markerPosition
            });
            marker.setMap(map);
            
            // 지도가 완전히 로드된 후 중심점 재설정
            setTimeout(() => {
              map.setCenter(markerPosition);
            }, 100);
          } catch (error) {
            console.error("지도 생성 중 오류 발생:", error);
          }
        });
      };

      script.onerror = () => {
        console.error("Kakao 지도 스크립트 로드 실패");
      };

      document.head.appendChild(script);
    };

    loadKakaoMap();

    return () => {
      const script = document.querySelector('script[src*="dapi.kakao.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="location-container">
      <img src={LocationImage} alt="장소 배경" className="location-bg" />
      <div className="map-container">
        <div id="map" ref={mapRef} className="map"></div>
      </div>
    </div>
  );
};

export default Location;