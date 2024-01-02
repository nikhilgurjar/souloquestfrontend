'use client';
import HistoryCard from './HistoryCard';
import HistoryWrapper from './HistoryWrapper.client';

const SouloHistory = () => {

  return (
    <HistoryWrapper>
    <HistoryCard />
    <HistoryCard />
    <HistoryCard />
    </HistoryWrapper>
  );
}

export default SouloHistory