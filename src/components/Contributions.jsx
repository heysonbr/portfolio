import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const Contributions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectLastHalfYear = (contributions) => {
    const now = new Date();
    const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 9));
    return contributions.filter((day) => new Date(day.date) > sixMonthsAgo);
  };

  return (
    <div className='container mx-auto p-5 mt-10  lg:max-w-4xl md:max-w-2xl'> 
      <h2 className='text-4xl mb-20 '>Contribuciones de GitHub</h2>
      <div className='flex justify-center '>
      {isMounted && (
        <div style={{ overflowX: 'auto' }}>
        <GitHubCalendar 
          username="heysonbr"
          transformData={selectLastHalfYear} // Filtra las contribuciones de los últimos 6 meses
          colorScheme="dark" // Esquema de colores opcional
          blockSize={15}
            blockMargin={6}
            blockRadius={
                4
            }
        />
        </div>
      )}
      </div>
    </div>
  );
};

export default Contributions;