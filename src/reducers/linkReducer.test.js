import { linkReducer } from './linkReducer';

describe('linkReducer', () => {
    
  let state;
  beforeEach(() => {
    state = [];
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(linkReducer(undefined, {})).toEqual(expectedResult);
  });

  it('add link action', () => {
    const mockAddLinkData = { link: {
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-00',
    }};
    const expectedResult = [{ 
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-00',
      vote: 0,
    }];
    expect(linkReducer(state, { type: 'ADD_LINK', ...mockAddLinkData })).toEqual(expectedResult);
  });

  it('remove link action', () => {
    const initialState = [
      { 
        id: '1',
        date: '2020-01-01 10-00-00',
        name: 'link name',
        url: 'www.link.com',
        lastVoteDate: '2020-01-01 10-00-00',
        vote: 0
      },
      { 
        id: '2',
        date: '2020-01-01 10-00-01',
        name: 'link name',
        url: 'www.link.com',
        lastVoteDate: '2020-01-01 10-00-01',
        vote: 0
      }
    ];
    const expectedResult = [{ 
      id: '2',
      date: '2020-01-01 10-00-01',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-01',
      vote: 0
    }];
    expect(linkReducer(initialState, { type: 'REMOVE_LINK', id: '1' })).toEqual(expectedResult);
  });

  it('upVote action', () => {
    const initialState = [{ 
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-00',
      vote: 0
    }];
    const expectedResult = [{ 
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-01',
      vote: 1
    }];
    expect(linkReducer(initialState, { type: 'UP_VOTE', id: '1', lastVoteDate: '2020-01-01 10-00-01' })).toEqual(expectedResult);
  });

  it('downVote action', () => {
    const initialState = [{ 
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-00',
      vote: 0
    }];
    const expectedResult = [{ 
      id: '1',
      date: '2020-01-01 10-00-00',
      name: 'link name',
      url: 'www.link.com',
      lastVoteDate: '2020-01-01 10-00-01',
      vote: -1
    }];
    expect(linkReducer(initialState, { type: 'DOWN_VOTE', id: '1', lastVoteDate: '2020-01-01 10-00-01' })).toEqual(expectedResult);
  });
});