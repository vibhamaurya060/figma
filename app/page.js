import Image from 'next/image';
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <div className="home-section">
        <span>Home</span>
        <div className='home-dot'></div>
        <span className='art-de'>Art de la table</span>
      </div>
      {/* 1 */}
      <div className='section-1'>
        <div className='big-image-section'>
          <div className='four-table'>
            <div className='table-box1'>
              <Image src="/image/Table ronde 165cm Festi 2.png" alt="Table" className='small-table-image1' width={40} height={40} />
            </div>
            <div className='table-box2'>
              <Image src="/image/Table ronde 165cm Festi 2.png" alt="Table" className='small-table-image1' width={40} height={40} />
            </div>
            <div className='table-box3'>
              <Image src="/image/Table ronde 165cm Festi 2.png" alt="Table" className='small-table-image1' width={40} height={40} />
            </div>
            <div className='table-box4'>
              <Image src="/image/Table ronde 165cm Festi 2.png" alt="Table" className='small-table-image1' width={40} height={40} />
            </div>
          </div>
          <Image src="/image/Location Cheese big picture 1.png" alt="larg-image" className='larg-image' width={552} height={552} />
        </div>
        <div className='text-section-1'>
          <div className='cheese-heading-section' >
          <span>Cheese – appareil à raclette 1/2 roue</span>
          <Image src="/image/heart.png" alt="heart" className='cheese-like' width={40} height={40} />
          </div>
        </div>
      </div>
    </>
  );
}
