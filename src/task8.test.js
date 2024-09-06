import { getDayOfWeek, printDayOfWeek } from './task8';

describe('task8 function', () => {
  it('getDayOfWeek returns day of week full name for Date object', () => {
    expect(getDayOfWeek(new Date(2024, 8, 6))).toBe('пятница');
    expect(getDayOfWeek(new Date(2024, 8, 7))).toBe('суббота');
    expect(getDayOfWeek(new Date(2024, 8, 8))).toBe('воскресенье');
  });

  it('printDayOfWeek returns day of week full name from user text input dd.MM.YYYY', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('06.09.2024');
    expect(printDayOfWeek()).toBe('пятница');

    jest.spyOn(window, 'prompt').mockReturnValue('07.09.2024');
    expect(printDayOfWeek()).toBe('суббота');

    jest.spyOn(window, 'prompt').mockReturnValue('08.09.2024');
    expect(printDayOfWeek()).toBe('воскресенье');
  });

  it('printDayOfWeek returns error message if user text input format is not dd.MM.YYYY', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('06/09/2024');
    expect(printDayOfWeek()).toEqual(expect.stringContaining('Ошибка'));
    expect(printDayOfWeek()).toEqual(expect.not.stringContaining('пятница'));

    jest.spyOn(window, 'prompt').mockReturnValue('07092024');
    expect(printDayOfWeek()).toEqual(expect.stringContaining('Ошибка'));
    expect(printDayOfWeek()).toEqual(expect.not.stringContaining('суббота'));

    jest.spyOn(window, 'prompt').mockReturnValue('77.09.2024');
    expect(printDayOfWeek()).toEqual(expect.stringContaining('Ошибка'));
    expect(printDayOfWeek()).toEqual(
      expect.not.stringContaining('воскресенье')
    );
  });
});
