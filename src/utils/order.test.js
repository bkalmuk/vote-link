import { orderByDate, orderByVote } from './order';

describe('linkReducer', () => {
  let mockList;

  beforeEach(() => {
    mockList = [
      {
        date: '2020-01-01 10-00-00',
        lastVoteDate: '2020-01-01 10-00-00',
        vote: 2,
      },
      {
        date: '2020-01-01 10-00-01',
        lastVoteDate: '2020-01-01 10-00-01',
        vote: 1,
      },
      {
        date: '2020-01-01 10-00-02',
        lastVoteDate: '2020-01-01 10-00-04',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-03',
        lastVoteDate: '2020-01-01 10-00-05',
        vote: 3,
      },
    ];
  });

  it('orderByDate function should sort from latest date to earlier', () => {
    const expectedResult = [
      {
        date: '2020-01-01 10-00-03',
        lastVoteDate: '2020-01-01 10-00-05',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-02',
        lastVoteDate: '2020-01-01 10-00-04',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-01',
        lastVoteDate: '2020-01-01 10-00-01',
        vote: 1,
      },
      {
        date: '2020-01-01 10-00-00',
        lastVoteDate: '2020-01-01 10-00-00',
        vote: 2,
      },
    ];
    expect(orderByDate(mockList)).toEqual(expectedResult);
  });

  it('orderByVote (type: most) Most voted is on top and if votes are equal then last vote date is on top', () => {
    const expectedResult = [
      {
        date: '2020-01-01 10-00-03',
        lastVoteDate: '2020-01-01 10-00-05',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-02',
        lastVoteDate: '2020-01-01 10-00-04',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-00',
        lastVoteDate: '2020-01-01 10-00-00',
        vote: 2,
      },
      {
        date: '2020-01-01 10-00-01',
        lastVoteDate: '2020-01-01 10-00-01',
        vote: 1,
      },
    ];
    expect(orderByVote(mockList, 'most')).toEqual(expectedResult);
  });

  it('orderByVote (type: less) Less voted is on top and if votes are equal then last vote date is on top', () => {
    const expectedResult = [
      {
        date: '2020-01-01 10-00-01',
        lastVoteDate: '2020-01-01 10-00-01',
        vote: 1,
      },
      {
        date: '2020-01-01 10-00-00',
        lastVoteDate: '2020-01-01 10-00-00',
        vote: 2,
      },
      {
        date: '2020-01-01 10-00-03',
        lastVoteDate: '2020-01-01 10-00-05',
        vote: 3,
      },
      {
        date: '2020-01-01 10-00-02',
        lastVoteDate: '2020-01-01 10-00-04',
        vote: 3,
      },
    ];
    expect(orderByVote(mockList, 'less')).toEqual(expectedResult);
  });
});