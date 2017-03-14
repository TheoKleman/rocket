export default class Vars
{
  constructor() {}
}

Vars.TemplateDirectoryUri = document.getElementsByTagName('html')[0].getAttribute('data-template-directory-uri');
Vars.dURI = Vars.TemplateDirectoryUri;
