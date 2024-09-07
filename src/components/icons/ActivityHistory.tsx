interface IActivityHistoryProps {
  width?: number | string;
  height?: number | string;
}

const ActivityHistory = ({ width, height }: IActivityHistoryProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_2116_573)" />
      <defs>
        <pattern
          id="pattern0_2116_573"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2116_573" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2116_573"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIo0lEQVR4nO2df1AU5xnHH4maqDEJqbZNIVhRg4qCgLd7OmnTmGTilGv/yH9JbeP0D9NJJumPtNOZTk2nnbaWu5gEJyZmTGOTaDlPDCj+SjQCEggK3O4hQUUUixzQcLsgGG2b4tN5zoXCsXuA92t/vN+Z7wxz8777vu/z4d1999n3bgGYmJiYmJiYmJiYmJiYmJiYmJgsJL6xL48XpRd5oXf96jM9s8crn1fvn2kX5B/wPvmnnFfOnkgbdl9vLif0/ozzSU/aa9pnjFc+S+yaxQvyOl6UX+Ab5ayJtGFr6FvJCdKvbF75aaoPRhQvyht5QbrBizIGLUgXbOLnD2iVX+nryeBEqWVE+UFekH4ftg1B+lOw3HAd+ay9oW+hVvlVjT2LOUFqHSrPidJ/OVF+KVwbnCj9MXQcdiGQAkbS6tN9C0YFajgAsl8Nyk0Ysj+0vOICtTZ4UX5FtbwgX1aDQjB4Qe5Sq8MJ8ibVNgTZpVpelHaAkZTfJD+9tqkXv93Yi+NBob/DwFCFwgny5rDlQ6AEYYhyZ7g6oVC0YChlz4CR9Nz5gV+8eHEAyc+c78fvNvWpQpkgDByGgjhlXBghUCYCIxRKOBjKDGkDowIZ8rpzV3DV6MFfJ08QBt601DuZ8pwoX5tsG5wgyeMf1wRAyD88d2USwdevObMAIed/Nvr0ZURzZgLyk9b+hAeUZ0AG8DeXruLGS1eDUL6jsvoykjmjz5DSwL/wyxuINxDx0/7/oMPgpy3OaECebRn4+RCMP7RfxUEcLfos0UHlrTpD3ui8FoID8a/d1xMeVJ4BGQ1k2YlLOHv7R5i0eQ+Cc3fUnfTyHpy9/UNcdqItbPBX1vfg14pqcFphCU7fUorfKD6FnDdgrRmy3T+AU1/9ICYgIMS3vbIXc2q7NIP7lfcqx9S5z1NrLSBbznXHBQYoTtsnasyOzzUh8oJkHSCFZzrjCiR1b71qYHNPdWue7jghYB0g29r7cIrLExcYU5ye4PVKK7izth0ZUyd5R7m1TlnvdF/H9INNmLS5OKYwkjbvwfkHTocNbnZNB85889BwHVoI0MyxHBAamK2hBzMr23Dx8daoe2nFxeAKakLLW0HCrOqOIBzT3xi6Or4YA+Q1/xcJv5fgrXQfMhII2Xf1y2EY/n8P4pNnjZ2G54wO5JcXB/DNrmv4dvd1/HXbAD7RbMxclu1kF+ZVXsCcj8+2g5H0TMuVUUBCbTQgtlo/rjjsw+x9dYpPXQYjyUxAVla1jQDBgCQWRnW7Cgw2QzAhQLwBzC5rUAWSte9UB5jtlJVd3YHJfzsezLJSojHanlZYgvfsOI5Z1ZfDXx8aAsEM7x1by3DGGwcxrdRLqyiNU5VJgXy/sScYsHikTqa+WoK5J7XvvOfu+mRMnZS9dZjz0WfWAWI/2hzX5OI8zWxvD4JKTo1m2IqDgnWALC4T4wokRSPbm3OySz0h6dqD2fvrrQHkudZ+zKy8pPqfGStnVmo/NaTrRmj5u985pnlBNx2Q7yk7TubtF3DKy7F5fAsj/tPTSoWwF/XlVf/AO14vG65Dmd8VtZ3WALK+5QraRwSD0twZx1pw0Ydnou6MYy1hL+ajVlreAGZWtAWfm3DKk0LTAyEYq3yJvdHjJ2HTAnm2tX/4NGUkZ5sJSH5T3wbanfiwgbeMZpsJCH05MtEB5RkQBkS3YjNEZ2JADAgkp7YT5+yswhlbD+Dtr++PumdsLcM5758I3uSF6wfdd9DN451vHQluARraNmSqizonyj8KFwTawjl9y764pE2mF5ZiXt0/NfvydfenY+rcX+K1FpD5Bxrjmlz8ZplP81mI2g5KStlbCkjqB/VxBZJSXKd52lTPgXkwy0zZ3vGALC2/GFcgS8pbNfsyMrE45Lu2H7XWDAnOkr11sU/Buzyas2PI9Chg2mv/f3pJgGhLqeWAkFfU+HHh4ebgyibaXnikecJ7denJYcax87jkeGsw82u5VZYRnM2AGAqIH4wkC8wQPxhJDIjOxICYHAgnBHBJ+QVccKgpJisyNaftOoFpOytUnfpeuQwFng2j7PSsh4KiR6Dw0O1gZiCLPz4ft7xXVFzg7oK/FD0BZgRCd/Sx3ioEsfEgFBQ5wGxAZm07nOjA4q3PlN2t9BuRYBYgWl/qByPZ5VkKZgGS9Ul74gPqjHSWuB8GswBZXmUGIEWPgGlmSPXlxAfUaRIgvCBtiBRIjhmuIQV6ASIGNkYKROunk8BI1g0Qn/zbSIHk1ZkAiMuzBvQgu1d+KlIg9LAo4QF1RuhN7gm9AyXmsglSZqRA0g+eTnxAnRF5EDbtSga9iBflnkiA3PtuRaIDihG6GvQku1d+6ZZXWCe7YvZrpRA3e9aDnkTvauJEueNWgNAW08QHdPetu8BdDx7PbaA30Yu96B0ek4Exvyy+uxoh+u4GV/E80KtuQpEm9Iab1JKGuH5dGqJudyNsKk4HvYtOX3RN4URJCoVA+6AeOHrO2Kl2p7sFnO7n4Xee6WA0BZfEgrwu/XBzyf37fWVf/XuNe87OqveN5OR3K96Ggt0/BpcnH/7s0XxNHxMTExMTExOToTQVAGgz2kwAuAsAKIE3BwDmAsB9IU5VHPr5XKVOsnKMmcox6dhMimgNf7cSsAUAsAwAculVtgDwEAA8Rr/aAQCOGDtfaeshpe1cpS/pSt+oj8a73xhHdwJAmjJQGvTjcQi0I8p+XOl7pjIWGpOhRKeG5QCwRgfBdMTIa5Qx0lh1qyRl2jss5lxl7LrTrDid+x06c74ydl2KVjUP6iBIjjj5QWXMutc9ALAIAFabbNbkK2NapIzRkEpSLn50n0Cbkm3KUnOtDgLs0PBapY82pc+pyhj0scs9hpqmDJSmfQoAzAeADHq0AgB59NxLWXJ+CwBoQ/OjyjJ0yGpQ6bORZagO1aVj0LHomHRsaoPaojapbeoD9YX6lDD9DyuXbo6COd/FAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ActivityHistory;
