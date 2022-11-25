import chalk from 'chalk';
import { hideAllConsoles, __fileNames } from 'show.config';

const Error = {
  title: chalk.bold.red,
  data: chalk.rgb(247, 173, 173),
  border: chalk.red,
};

const Log = {
  title: chalk.bold.cyan,
  data: chalk.rgb(157, 212, 255),
  border: chalk.cyan,
};

export const highLightResponse = ({
  dataToShow,
  component,
  display = true,
}: {
  dataToShow: any;
  component: string;
  display?: boolean;
}) => {
  if (display === false) return;

  console.log(
    Log.border(
      `====================================================================================================================================================================`,
    ),
  );
  console.log(Log.title(`Console.log:        ( ${component} )`));
  console.log(
    Log.border(
      `====================================================================================================================================================================`,
    ),
  );
  const consoleMsg = Log.data(JSON.stringify(dataToShow, null, 3));
  console.log(consoleMsg);
  console.log(
    Log.border(
      `--------------------------------X--------------------------------X--------------------------------X--------------------------------X--------------------------------`,
    ),
  );
};

export const highLightError = ({
  error,
  component,
}: {
  error: any;
  component: string;
}) => {
  const ErrMsg = Error.data(JSON.stringify(error, null, 3));

  console.log(
    Error.border(
      `====================================================================================================================================================================`,
    ),
  );
  console.log(Error.title(`Console.log: ERROR       ( ${component} )`));
  console.log(
    Error.border(
      `====================================================================================================================================================================`,
    ),
  );
  console.log(ErrMsg);
  console.log(
    Error.border(
      `--------------------------------X--------------------------------X--------------------------------X--------------------------------X--------------------------------`,
    ),
  );
};

export const conditionalLog = ({
  data,
  type,
  show,
  name,
  error = false,
}: {
  show: boolean;
  type: 'API' | 'FUNCTION' | 'PAGE' | 'CONTROLLER' | 'NEXTJS PROPS';
  name: string;
  data: any;
  error?: boolean;
}) => {
  if (hideAllConsoles) return;

  if (show) {
    if (type === 'API') {
      const errType = error ? 'API Failed' : 'No Data Found';
      const message = `${errType} : ${name}`;
      highLightError({ error: data, component: message });
      return;
    }

    if (
      name === __fileNames.productDetails ||
      name === __fileNames._app ||
      name === __fileNames.requestConsultation ||
      name === __fileNames.compareProducts ||
      name === __fileNames.home
    ) {
      const message = `${type} : ${name}`;
      highLightResponse({ dataToShow: data, component: message });
    }
  }
};
